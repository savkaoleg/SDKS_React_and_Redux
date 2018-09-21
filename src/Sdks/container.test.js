import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import Container from './container'
import { getTags } from '../Filter/container'

import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import bootstrap from '../hooks/bootstrap'
const store = configureStore()
bootstrap(store)()

import {
  handleSearcChange,
  handleChange
} from '../store/visibilityFilter/actions'
const El = () => (
  <Provider store={store}>
    <Container />
  </Provider>
)

describe('Sdks', () => {
  it('Renders correctly', () => {
    const Sdks = mount(<El />)
    expect(Sdks).toMatchSnapshot()
  })

  it('Test All', () => {
    const Sdks = mount(<El />)
    const length = store.getState().sdks.length
    const searchResult = Sdks.find('h2')
    expect(searchResult.length).toEqual(length)
  })
  it('Test Radio', () => {
    const Sdks = mount(<El />)
    const tags = getTags(store.getState().sdks)

    const newType = 'Tag'
    const newAditional = tags[0]

    store.dispatch(handleChange(newType, newAditional))
    Sdks.update()

    const searchResult = Sdks.find('h2')
    expect(searchResult.length).toBeGreaterThan(1)
  })

  it('Test search #1', () => {
    const newType = 'Search'
    const searchQuery = 'searchQuery'
    const Sdks = mount(<El />)

    store.dispatch(handleSearcChange(newType, searchQuery))
    Sdks.update()
    const searchResult = Sdks.find('h2')
    expect(searchResult.text()).toEqual('No results with your filter')
  })

  it('Test search #2', () => {
    const newType = 'Search'
    const searchQuery = 'AppMK'
    const Sdks = mount(<El />)
    store.dispatch(handleSearcChange(newType, searchQuery))
    Sdks.update()
    const searchResult = Sdks.find('h2')
    expect(searchResult.text()).toEqual(searchQuery)
  })

  it('Test search #3', () => {
    const newType = 'Search'
    const searchQuery = ''
    const Sdks = mount(<El />)
    const length = store.getState().sdks.length
    store.dispatch(handleSearcChange(newType, searchQuery))
    Sdks.update()
    const searchResult = Sdks.find('h2')
    expect(searchResult.length).toEqual(length)
  })
})
