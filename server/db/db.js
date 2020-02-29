const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getWalks,
  findUser,
  registerUser
}

function getUsers (db = connection) {
  return db('users')
    .select()
}

function findUser (user, db = connection) {
  const username = user.username
  return db('users')
    .where('username', username)
    .select()
    .first()
}

function registerUser (user, db = connection) {
  return db('users')
    .insert(user)
}

function getWalks (db = connection) {
  return db('walks')
    .select()
    .then(walks => {
      let parsedWalks = walks.map(walk => parser(walk))
      return parsedWalks
    })
}

function parser (photosArray) {
  let parsedPhotos = JSON.parse(photosArray.photos)
  photosArray.photos = parsedPhotos
  return photosArray
}
