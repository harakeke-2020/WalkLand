import { LOGIN, LOGOUT } from '../actions/authActions'

const auth = (state = '', action) => {
  switch (action.type) {
    case LOGIN:
      return action.username
    case LOGOUT:
      return ''
    default:
      return state
  }
}

export default auth
