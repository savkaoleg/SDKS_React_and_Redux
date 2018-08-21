import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import Container, { getTags } from './container'

import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import bootstrap from '../hooks/bootstrap'
const store = configureStore()
bootstrap(store)()

const El = () => (
      <Provider store={store} >
        <Container />
      </Provider>
  )

describe('Filter', () => {
  it('Renders correctly', () => {
    const Filter = mount(<El/>)
    expect(Filter).toMatchSnapshot()
  })

  it('Check if `All` on', () => {
    const Filter = mount(<El/>)
    const input = Filter.find('input').find({ checked: true})
    expect(input.prop('value')).toEqual(store.getState().visibilityFilter.type)
  })

  it('Check if `tag` radio work correctly', () => {
    const Filter = mount(<El/>)
    const tag = Filter.find('Filter').prop('tags')[0]
    const radio = Filter.find({ value: tag}).find('Radio')

    radio.simulate('click')
    expect(store.getState().visibilityFilter.aditional).toEqual(tag)
  })

  it('Check if search input work correctly', () => {
    const searchString = 'Ab'
    const Filter = mount(<El/>)
    const searchInput = Filter.find({ name: 'search'})

    searchInput.simulate('change', {target: {name: 'search', value: searchString}})
    expect(store.getState().visibilityFilter.search).toEqual(searchString)

  })
  it('getTags', () => {
    const tags = getTags(store.getState().sdks)
    expect(tags).toEqual([
      'marketing-automation',
      'ad-network',
      'analytics',
      'backend',
      'game-engine',
      'development-tool',
      'social',
      'commerce'
    ])
  })

})

