const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWalks()
    .then(response => {
      // if (!req) {
      //   res.sendStatus(404)
      // } else {
      // console.log(res)
      res.json(response)
    }
    )
}
)

module.exports = router
