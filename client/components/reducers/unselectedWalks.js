import mockData from '../../../data/data'
export const SELECTEDWALK = 'SELECTEDWALK'

const unSelectedWalks = (state = mockData, action) => {
  switch (action.type) {
    case SELECTEDWALK:
      state = mockData
      return state.filter((item) => item.id !== action.selectedWalk.id)
    default:
      return state
  }
}

export default unSelectedWalks
