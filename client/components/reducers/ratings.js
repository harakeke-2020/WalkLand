import { RECEIVERATING } from '../actions/allWalks.js'
import { ADD_REVIEW } from '../actions/reviewWalks'

const ratings = (state = [], action) => {
  switch (action.type) {
    case RECEIVERATING:
      return action.ratings
    case ADD_REVIEW:
      return [...state, action.review]
    default:
      return state
  }
}

export default ratings
