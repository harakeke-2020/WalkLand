if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const passport = require('passport')
const jwtSecret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')
// const methodOverride = require('method-override')

const db = require('../db/db')

// module.exports = app => {
router.post('/registerUser', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error(err)
    }
    if (info !== undefined) {
      res.statusMessage = `${info.message}`
      res.status(403).end()
    } else {
          res.statusMessage = 'user created!'
          res.status(200).end()
    }
  })(req, res, next)
})

router.post('/loginUser', (req, res, next) => {
  passport.authenticate('login', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`)
    }
    if (info !== undefined) {
      console.log('login error ', info.message)
      res.statusMessage = `${info.message}`
      if (info.message === 'bad username') {
        res.status(401).end()
      } else {
        res.status(403).end()
      }
    } else {
      db.findUser(req.body.username)
        .then(user => {
          const token = jwt.sign({ id: user.id }, jwtSecret, {
            expiresIn: 60 * 60
          })
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in'
          })
        })
    }
  })(req, res, next)
})

router.delete('/deleteUser/:username', (req, res, next) => {
  // req.get("authorization")
  console.log('request in route ', req.params)
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err)
    }
    if (info !== undefined) {
      console.error(info.message)
      res.statusMessage = `${info.message}`
      res.status(403).end()
    } else {
      console.log('username in params ', req.params.username, 'username from jwt auth ', user.username)
      if (req.params.username === user.username) {
        db.deleteUser(user.username)
          .then((userInfo) => {
            if (userInfo === 1) {
              console.log('user deleted from db')
              res.statusMessage = `${'user deleted from db'}`
              res.status(200).end()
            } else {
              res.statusMessage = 'no user with that username to delete'
              res.status(404).end()
            }
          })
          .catch((error) => {
            console.log(error)
            res.statusMessage = 'problem communicating with db'
            res.status(500).end()
          })
      } else {
        console.error('jwt id and username do not match')
        res.statusMessage = 'You are not authorized :('
        res.status(403).end()
      }
    }
  })(req, res, next)
})

// authenticates jwt token to persist logged in state

// router.get('/findUser', (req, res, next) => {
//   passport.authenticate('jwt', { session: false }, (err, user, info) => {
//     if (err) {
//       console.log(err)
//     }
//     if (info !== undefined) {
//       console.log(info.message)
//       res.status(401).send(info.message)
//     } else if (user.username === req.query.username) {
//       db.findUser(req.query.username).then((userInfo) => {
//         if (userInfo != null) {
//           console.log('user found in db from findUsers')
//           res.status(200).send({
//             auth: true,
//             username: userInfo.username,
//             password: userInfo.password,
//             email: userInfo.email,
//             message: 'user found in db'
//           })
//         } else {
//           console.error('no user exists in db with that username')
//           res.status(401).send('no user exists in db with that username')
//         }
//       })
//     } else {
//       console.error('jwt id and username do not match')
//       res.status(403).send('username and jwt token do not match')
//     }
//   })(req, res, next)
// })

module.exports = router
