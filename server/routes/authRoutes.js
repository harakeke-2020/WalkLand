const express = require('express')
const router = express.Router()

const db = require('../db/db')

// const db = require('../db/db')

router.get('/', (req, res) => {
  db.getUsers()
  .then(res => console.log('woo db file connected ', res))
  console.log('hit the auth route')
//   if (!req) {
//     res.sendStatus(404)
//   } else {
//     res.json(foods)
//   }
}
)

//post request when user reqisters

//get request when user logs in to compare to databse.
//if user trying to log in matches user in db, then authenticate will be successful
//logout route?

module.exports = router
