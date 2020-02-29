export const NAVIGATE = 'NAVIGATE'

export const initialState = {}

const activePage = (destination, id) => {
  return {
    type: NAVIGATE,
    destination,
    id
  }
}

export default activePage
