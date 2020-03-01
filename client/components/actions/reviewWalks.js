import request from 'superagent'

export const ADD_REVIEW = 'ADD_REVIEW'
export const EDIT_REVIEW = 'EDIT_REVIEW'

const addReview = review => {
  return {
    type: ADD_REVIEW,
    review
  }
}

const editReview = review => {
  return {
    type: EDIT_REVIEW,
    review
  }
}