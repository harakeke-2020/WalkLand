import { combineReducers } from 'redux'

import activePage from './activePage'
import selectedWalk from './selectedWalk'
import allWalks from './allWalks'
import loginState from './loginState'

export default combineReducers({
  activePage,
  selectedWalk,
  allWalks,
  loginState
})
