export const INITIALWALKS = 'INITIALWALKS'
import initState from '../../../data/data' 

const initialWalks = (state = initState, action) => {
  switch (action.type) {
    case INITIALWALKS:
      return action.INITIALWALKS
    default:
      return state
  }
}

export default initialWalks
