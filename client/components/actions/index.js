export const NAVIGATE = 'NAVIGATE'

export const navigateLanding = (destination) => {
  return {
    type: NAVIGATE,
    destination
  }
}
//pass in a string for it to become