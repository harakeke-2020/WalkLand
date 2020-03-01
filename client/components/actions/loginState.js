export const LOGIN_STATE = 'LOGIN_STATE'

const loginState = (trueOrFalse) => {
  return {
    type: LOGIN_STATE,
    trueOrFalse
  }
}

export default loginState
