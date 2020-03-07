const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

//test
module.exports = {
  getUsers,
  getWalks,
  findUser,
  findUserJWT,
  registerUser,
  deleteUser,
  getReviewRatings,
  addReview
}

function getUsers (db = connection) {
  return db('Users')
    .select()
}

function findUser (username, db = connection) {
  return db('Users')
    .where('username', username)
    .first()
    .select()
}

function registerUser (user, db = connection) {
  return db('Users')
    .insert(user)
}

function findUserJWT (id, db = connection) {
  return db('Users')
    .where('id', id)
    .select()
    .first()
}

function deleteUser (username, db = connection) {
  return db('Users')
    .where('username', username)
    .del()
}

function getWalks (db = connection) {
  return db('Walks')
    .select()
    .then(walks => {
      let parsedWalks = walks.map(walk => parser(walk))
      return parsedWalks
    })
}

function getReviewRatings (db = connection) {
  return db('RatingReviews')
    .select()
}

function addReview (review, db = connection) {
  return db('RatingReviews')
    .insert(review)
}

function parser (photosArray) {
  let parsedPhotos = JSON.parse(photosArray.photos)
  photosArray.photos = parsedPhotos
  return photosArray
}
