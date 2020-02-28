import request from 'superagent'
// import { showError } from './showError'

export const GETWALKS = 'GETWALKS'
export const RECEIVEWALKS = 'RECEIVEWALKS'

export const requestWalks = () => {
  return {
    type: GETWALKS
  }
}

export const receiveWalks = (walks) => {
  return {
    type: RECEIVEWALKS,
    walks
  }
}

export function fetchWalks () {
  return (dispatch) => {
    // dispatch(requestWalks())
    return request
      .get('/api/v1/walks')
      .then(res => {
        dispatch(receiveWalks(res.body))
      })
      // .catch(err => {
      //   dispatch(showError(err.message))
      // })
  }
}
