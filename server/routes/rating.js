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
  console.log('add review form data ', req.body)
  db.findUser(req.body.username)
    .then(returnedUser => {
      const newObject = {
        userId: returnedUser.id,
        walkId: req.body.walkId,
        username: req.body.username,
        rating: Number(req.body.rating),
        review: req.body.review
      }
      console.log('review for addreview: ', newObject)
      db.addReview(newObject)
        .then(resolve => res.json(''))
    })
    .catch(err => console.log(err))
})

module.exports = router
