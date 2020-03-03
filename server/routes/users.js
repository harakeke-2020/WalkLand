const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:username', (req, res) => {
  db.findUser(req.params.username)
    .then(returnedUser => {
      if(!returnedUser) {
        res.statusMessage = 'User profile not found'
        res.status(404).end()
      } else {
        res.json(returnedUser)
      }
    })
})

module.exports = router
