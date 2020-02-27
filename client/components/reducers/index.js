import { combineReducers } from 'redux'

import activePage from './activePage'
import selectedWalk from './SelectedWalk'

export default combineReducers({
  activePage,
  selectedWalk
})
