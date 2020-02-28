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
}
