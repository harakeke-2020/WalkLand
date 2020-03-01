import request from 'superagent'
// import { showError } from './showError'

export const GETWALKS = 'GETWALKS'
export const RECEIVEWALKS = 'RECEIVEWALKS'
export const RECEIVERATING = 'RECEIVERATING'

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

export const receiveRating = (ratings) => {
  return {
    type: RECEIVERATING,
    ratings
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

export function getReviewRatings(id) {
  return (dispatch) => {
    return request
    .get('/api/v1/rating/')
    .then(res => 
      dispatch(receiveRating(res.body))
    )
  }
}