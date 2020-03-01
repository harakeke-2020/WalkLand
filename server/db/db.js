const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getWalks,
  findUser,
  findUserJWT,
  registerUser,
  deleteUser
  // getReviewRatings
}

function getUsers (db = connection) {
  return db('users')
    .select()
}

function findUser (username, db = connection) {
  console.log('username given to finduser in db ', username)
  return db('users')
    .where('username', username)
    .select()
    .first()
}

function registerUser (user, db = connection) {
  return db('users')
    .insert(user)
}

function findUserJWT (id, db = connection) {
  return db('users')
    .where('id', id)
    .select()
    .first()
}

function deleteUser(username, db = connection) {
  return db('users')
    .where('username', username)
    .del()
}

function getWalks (db = connection) {
  return db('walks')
    .select()
    .then(walks => {
      let parsedWalks = walks.map(walk => parser(walk))
      return parsedWalks
    })
}

function getReviewRatings () {
  return db('ratingReviews')
    .join('users', 'userId', 'users.id')
    .select()
}
// function getReviewRatings (id) {
//   return db('reviewRatings')
//     .join('users', 'userId', 'user.id')
//     .where('walkId', id)
//     .first()
// }

function parser (photosArray) {
  let parsedPhotos = JSON.parse(photosArray.photos)
  photosArray.photos = parsedPhotos
  return photosArray
}
