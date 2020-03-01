import { LOGIN } from '../actions/authActions'

const login = (state = '', action) => {
  switch (action.type) {
    case LOGIN:
      return action.username
    default:
      return state
  }
}

export default login
