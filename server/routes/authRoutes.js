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
      console.error(info.message)
      res.status(403).send(info.message)
    } else {
      req.logIn(user, error => {
        db.registerUser(user)
          .then(() => {
            console.log('user created in db')
            res.status(200).send({ message: 'user created' })
          })
      })
    }
  })(req, res, next)
})

router.post('/loginUser', (req, res, next) => {
  passport.authenticate('login', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`)
    }
    if (info !== undefined) {
      console.error(info.message)
      if (info.message === 'bad username') {
        res.status(401).send(info.message)
      } else {
        res.status(403).send(info.message)
      }
    } else {
      req.logIn(users, () => {
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
      })
    }
  })(req, res, next)
})

router.delete('/deleteUser', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err)
    }
    if (info !== undefined) {
      console.error(info.message)
      res.status(403).send(info.message)
    } else {
      db.deleteUser(user.username)
        .then((userInfo) => {
          if (userInfo === 1) {
            console.log('user deleted from db')
            res.status(200).send('user deleted from db')
          } else {
            console.error('user not found in db')
            res.status(404).send('no user with that username to delete')
          }
        })
        .catch((error) => {
          console.error('problem communicating with db')
          res.status(500).send(error)
        })
    }
  })(req, res, next)
})

// }

// const initializePassport = require('../passport-config')
// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
// )

// router.post('/register', (req, res) => {
//   const userData = req.body
//   db.findUser(userData)
//     .then(async user => {
//       if (!user) {
//         userData.password = await bcrypt.hash(userData.password, 10)
//         db.registerUser(userData)
//           .then(user => {
//             console.log('user succesfully registered ', userData.username)
//             console.log(user)
//             res.json({ status: userData.username + ' was registered! You can now login' })
//           })
//           .catch(err => {
//             res.send('error: ' + err)
//           })
//       } else {
//         res.json({ error: 'User already exists' })
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

// router.post('/login', (req, res) => {
//   db.findUser(req.body)
//     .then(user => {
//       if (user) {
//         if (bcrypt.compareSync(req.body.password, user.password)) {
//           // let token = jwt.sign(user, process.env.SECRET_KEY, {
//           //   expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
//           // })
//           // console.log('user verified, token: ', token)
//           res.json(user.username)
//         }
//       } else {
//         res.status(400).json({ error: 'User does not exist' })
//       }
//     })
//     .catch(err => {
//       res.status(400).json({ error: err })
//     })
// })

// router.get('/profile', (req, res) => {
//   var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
//   db.findUser(req.body)
//     .then(user => {
//       if (user) {
//         res.json(user)
//       } else {
//         res.send('User does not exist')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

module.exports = router
