import mockData from '../../../data/data'
export const ALLWALKS = 'ALLWALKS'

const allWalks = (state = mockData, action) => {
  switch (action.type) {
    case ALLWALKS:
      return action.allWalks
    default:
      return state
  }
}

export default allWalks
