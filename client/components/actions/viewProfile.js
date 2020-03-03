
export const VIEW_PROFILE = "VIEW_PROFILE";

// Synchronous action
function viewProfile (username, isViewing) {
  return {
    type: VIEW_PROFILE,
    username,
    isViewing
  }
}

export default viewProfile


