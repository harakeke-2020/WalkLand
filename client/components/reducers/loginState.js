export const LOGIN_STATE = 'LOGIN_STATE'

function loginState (state = false, action) {
  switch (action.type) {
    case LOGIN_STATE:
      return action.trueOrFalse
    default:
      return state
  }
}

export default loginState
