import { combineReducers } from 'redux'
import sdks from './sdks'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  sdks,
  visibilityFilter
})

export default rootReducer
