
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

let middleWares = [ thunkMiddleware ]

const loggerMiddleware = createLogger({collapsed: (state, action) => {
  if (action.type === 'CREATE_ITEM') {
    return false
  } else {
    return true
  }
}})

const envArr = ['production', 'test']

if (!envArr.includes(process.env.NODE_ENV)) {
  middleWares = [...middleWares, loggerMiddleware]
}

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
  ...middleWares
))(createStore)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
