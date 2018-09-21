import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Sdks from './Sdks/container'
import Filter from './Filter/container'
import configureStore from './store/configureStore'
import bootstrap from './hooks/bootstrap'
import './App.scss'

const store = configureStore()
bootstrap(store)()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Filter />
          <Sdks />
        </React.Fragment>
      </Provider>
    )
  }
}

export default hot(module)(App)
