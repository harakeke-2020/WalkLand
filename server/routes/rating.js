const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getReviewRatings()
    .then(response => {
      res.json(response)
    }
    )
}
)

module.exports = router
