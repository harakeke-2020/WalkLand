const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

module.exports = {
  getUsers,
  getWalks
}

function getUsers () {
  return db('users')
    .select()
}

function getWalks () {
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
