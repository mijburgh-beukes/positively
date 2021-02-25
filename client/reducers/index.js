import { combineReducers } from 'redux'

import userReducer from './userReducer'
import habitReducer from './habitReducer'

export default combineReducers({
  userReducer,
  habitReducer
})
