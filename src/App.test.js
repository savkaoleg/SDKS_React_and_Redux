import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import App from './App'

describe('App', () => {
  it('Renders correctly', () => {
    const component = mount(<App />)
    expect(component).toMatchSnapshot()
  })
})
