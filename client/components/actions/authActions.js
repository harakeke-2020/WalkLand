import request from 'superagent'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const DELETE_USER = 'DELETE_USER'

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

export const deleteUser = () => {
  return {
    type: DELETE_USER
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

// Delete profile by sending a DELETE request from /api/v1/auth/deleteUser
export function deleteProfile() {
  return (dispatch) => {
    console.log('deleteProfile() from actions/authActions is hit')
    return request
    .delete('http://localhost:3000/api/v1/auth/deleteUser')
    .set('authorization', `bearer ${localStorage.token}`)
    .then(res => {
      dispatch(deleteUser())
      console.log('res')
    })
  }
}
