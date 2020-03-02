import request from 'superagent'

export const ADD_REVIEW = 'ADD_REVIEW'
// export const EDIT_REVIEW = 'EDIT_REVIEW'

const addReview = review => {
  return {
    type: ADD_REVIEW,
    review
  }
}

// const editReview = review => {
//   return {
//     type: EDIT_REVIEW,
//     review
//   }
// }

export function createReview (review) {
  return (dispatch) => {
    return request
      .post('http://localhost:3000/api/v1/rating')
      .send(review)
      .then(thing => console.log('what the post:', thing))
      .then(res => {
        if (res.message) {
          console.log('res from reviewWalksaction: ', res)
        } else {
          dispatch(addReview(res))
        }
      })
  }
}
