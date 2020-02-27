export const NAVIGATE = 'NAVIGATE'

const activePage = (destination) => {
  return {
    type: NAVIGATE,
    destination
  }
}

export default activePage
