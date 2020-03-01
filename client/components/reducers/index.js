import { combineReducers } from 'redux'

import activePage from './activePage'
import selectedWalk from './selectedWalk'
import allWalks from './allWalks'
import login from './login'

export default combineReducers({
  activePage,
  selectedWalk,
  allWalks,
  login
})
