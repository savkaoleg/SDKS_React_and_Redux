import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Input from './Input'

describe('Input', () => {
  it('Renders correctly', () => {
    const component = shallow(<Input />)

    expect(component).toMatchSnapshot()
  })

  it('Value', () => {
    const testString = 'abcde'
    const component = shallow(<Input value={testString} />)
    const result = component.find('input').prop('value')

    expect(result).toEqual(testString)
  })

  it('Placeholder', () => {
    const testString = 'InputPlaceholder'
    const component = shallow(<Input placeholder={testString} />)
    const result = component.find('span.placeholder').text()

    expect(result).toEqual(testString)
  })

  it('Spy', () => {
    const event = { target: { name: 'search', value: 'qwerty' } }
    const component = shallow(<Input />)

    const spy = spyOn(component.instance(), 'onChange')
    component.instance().forceUpdate()
    component.find('input').simulate('change', event, spy)
    expect(spy.calls.mostRecent().args[0]).toEqual(event)
  })
})
