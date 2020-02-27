import mockData from '../../../data/data'
export const ALLWALKS = 'ALLWALKS'

const selectedWalk = (state = mockData, action) => {
  switch (action.type) {
    case ALLWALKS:
      return action.allWalks
    default:
      return state
  }
}

export default selectedWalk
