import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rootEl = document.getElementById('index')


const render = () => {
  ReactDOM.render(
    <App />,
    rootEl
  )
}

render()
