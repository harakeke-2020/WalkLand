if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const db = require('../db/db')

let users = []

db.getUsers().then(res => users = res)

const initializePassport = require('../passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

router.post('/register', (req, res) => {
  const userData = req.body
  db.findUser(userData)
    .then(async user => {
      if (!user) {
        userData.password = await bcrypt.hash(userData.password, 10)
        db.registerUser(userData)
          .then(user => {
            console.log('user succesfully registered ', userData.username)
            console.log(user)
            res.json({ status: userData.username + ' was registered! You can now login' })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/login', (req, res) => {
  db.findUser(req.body)
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user, process.env.SECRET_KEY, {
            expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
          })
          console.log('user verified, token: ', token)
          res.json({ token: token })
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

router.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  db.findUser(req.body)
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router
