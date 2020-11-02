import {combineReducers} from 'redux'

import auth from './auth'
import home from './home'
import profile from './profile'
import address from './address'

export default combineReducers({
  auth,
  home,
  profile,
  address
})