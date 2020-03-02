export const NAVIGATE = 'NAVIGATE'

export function activePage (state = 'profile', action, id) {
  switch (action.type) {
    case NAVIGATE:
      return action.destination
    default:
      return state
  }
}

export default activePage
