import { combineReducers } from 'redux'

import activePage from './activePage'
import selectedWalk from './selectedWalk'
import allWalks from './allWalks'
import ratings from './ratings'
import auth from './auth'

export default combineReducers({
  activePage,
  selectedWalk,
  allWalks,
  ratings,
  auth
})
