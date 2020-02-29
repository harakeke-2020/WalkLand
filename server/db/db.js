const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getWalks,
  findUser,
  findUserJWT,
  registerUser
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
