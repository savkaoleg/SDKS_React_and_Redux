import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Radio from './Radio'

describe('Radio', () => {
  it('Renders correctly', () => {
    const component = shallow(<Radio />)

    expect(component).toMatchSnapshot()
  })

  it('Value', () => {
    const testValue = 'abcde'
    const component = shallow(<Radio value={testValue} />)
    const result = component.find('input').prop('value')

    expect(result).toEqual(testValue)

  })

  it('Checked', () => {
    const testValue = false
    const component = shallow(<Radio checked={testValue} />)
    const result = component.find('input').prop('checked')

    expect(result).toEqual(testValue)

  })

  it('Checked className', () => {
    const testValue = true
    const component = shallow(<Radio checked={testValue} />)
    const result = component.find('input.checked').prop('checked')

    expect(result).toEqual(testValue)

  })

  it('Children', () => {
    const childrenText = 'some text'
    const children = (<div className='Children'>{childrenText}</div>)
    const component = shallow(<Radio value="some value">{children}</Radio>)
    const result = component.find('div.Children')

    expect(result.text()).toEqual(childrenText)
  })


  it('Spy', () => {
    const value = 'someValue'
    const component = shallow(<Radio value={value} />)

    const spy = spyOn(component.instance(), 'onClick')
    component.instance().forceUpdate()
    component.find('div.md-radio').simulate('click', {}, spy)
    expect(spy).toBeCalled()

  })
})
