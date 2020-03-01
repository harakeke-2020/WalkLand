import request from 'superagent'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const loginUser = username => {
  return {
    type: LOGIN,
    username
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT
  }
}

export function registerUserAndLogin (user) {
  return (dispatch) => {
    return request
      .post('http://localhost:3000/api/v1/auth/registerUser')
      .send(user)
      .then(data => {
        if (data.message) {
          console.log(data)
        } else {
          return request.post('http://localhost:3000/api/v1/auth/loginUser')
            .send({ username: user.username, password: user.password })
            .then(res => {
              console.log(res.req._data.username)
              localStorage.setItem('token', res.body.token)
              dispatch(loginUser(res.req._data.username))
            })
        }
      })
  }
}

export function justLogin (user) {
  return (dispatch) => {
    return request.post('http://localhost:3000/api/v1/auth/loginUser')
      .send({ username: user.username, password: user.password })
      .then(res => {
        if (res.message) {
          console.log(res)
        } else {
          localStorage.setItem('token', res.body.token)
          dispatch(loginUser(res.req._data.username))
        }
      })
  }
}
