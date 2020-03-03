const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:username', (req, res) => {
  db.findUser(req.params.username)
    .then(returnedUser => {
      console.log(returnedUser)
      res.json(returnedUser)
    })
})

module.exports = router
