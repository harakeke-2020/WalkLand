const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:username', (req, res) => {
  db.findUser(req.body.username)
    .then(returnedUser => {
      res.json(returnedUser)
    })
})

module.exports = router
