export const NAVIGATE = 'NAVIGATE'

// Changed from default export to normal export for readability during import.
export function activePage (destination) {
  return {
    type: NAVIGATE,
    destination
  }
}
