const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getReviewRatings()
    .then(response => {
      res.json(response)
    })
})

router.post('/', (req, res) => {
  console.log('hit the route')
  db.findUser(req.body.username)
    .then(returnedUser => {
      const newObject = {
        userId: returnedUser.id,
        rating: Number(req.body.rating),
        walkId: req.body.walkId,
        review: req.body.review
      }
      console.log('user for addreview: ', newObject)
      db.addReview(newObject)
        .then(res => res.json(res))
    })
    .catch(err => console.log(err))
})

module.exports = router
