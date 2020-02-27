export const NAVIGATE = 'NAVIGATE'

export const activePage = (destination) => {
  return {
    type: NAVIGATE,
    destination
  }
}
