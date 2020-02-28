import { combineReducers } from 'redux'

import activePage from './activePage'
import selectedWalk from './selectedWalk'
import allWalks from './allWalks'
import unselectedWalks from './unselectedWalks'

export default combineReducers({
  activePage,
  selectedWalk,
  allWalks,
  unselectedWalks
})
