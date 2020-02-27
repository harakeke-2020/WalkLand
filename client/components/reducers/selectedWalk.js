import mockData from '../../../data/data'
export const SELECTEDWALK = 'SELECTEDWALK'

const selectedWalk = (state = { /*mockData*/ }, action) => {
  switch (action.type) {
    case SELECTEDWALK:
      return action.selectedWalk
    default:
      return state
  }
}

export default selectedWalk
