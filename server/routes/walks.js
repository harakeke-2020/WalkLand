const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWalks()
    .then(res => {
      if (!req) {
        res.sendStatus(404)
      } else {
        console.log('response from db ', res)
        // console.log('what we send to client ', res.json(res))
      }
    })
}
)

module.exports = router
