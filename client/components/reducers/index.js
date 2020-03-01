import { combineReducers } from 'redux'

import activePage from './activePage'
import selectedWalk from './selectedWalk'
import allWalks from './allWalks'
import ratings from './ratings'

export default combineReducers({
  activePage,
  selectedWalk,
  allWalks,
  ratings
})
