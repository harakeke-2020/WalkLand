const bcrypt = require('bcrypt')
const db = require('../db/db')

const jwtSecret = process.env.SECRET_KEY
const BCRYPT_SALT_ROUNDS = 12

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const env = require('dotenv').config()

passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
      session: false
    },
    (req, username, password, done) => {
      console.log('in passport config', username)
      console.log('in passport config', req.body.email)

      try {
        db.findUser(username).then(user => {
          if (user != null) {
            console.log('username or email already taken')
            return done(null, false, {
              message: 'username or email already taken'
            })
          }
          bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
            db.registerUser({
              username,
              email: req.body.email,
              password: hashedPassword
            }).then(user => {
              console.log('user created')
              return done(null, user)
            })
          })
        })
      } catch (err) {
        return done(err)
      }
    }
  )
)

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false
    },
    (username, password, done) => {
      try {
        db.findUser(username)
          .then(user => {
            if (user === null) {
              return done(null, false, { message: 'bad username' })
            }
            bcrypt.compare(password, user.password).then(response => {
              if (response !== true) {
                console.log('passwords do not match')
                return done(null, false, { message: 'passwords do not match' })
              }
              console.log('user found & authenticated')
              return done(null, user)
            })
          })
      } catch (err) {
        done(err)
      }
    }
  )
)


//this route persists a login if the app is exited and restarted

// router.get('/findUser', (req, res, next) => {
//   passport.authenticate('jwt', { session: false }, (err, user, info) => {
//     if (err) {
//       console.log(err)
//     }
//     if (info !== undefined) {
//       console.log(info.message)
//       res.status(401).send(info.message)
//     } else if (user.username === req.query.username) {
//       User.findOne({
//         where: {
//           username: req.query.username
//         }
//       }).then((userInfo) => {
//         if (userInfo != null) {
//           console.log('user found in db from findUsers')
//           res.status(200).send({
//             auth: true,
//             first_name: userInfo.first_name,
//             last_name: userInfo.last_name,
//             email: userInfo.email,
//             username: userInfo.username,
//             password: userInfo.password,
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

const opts = {
  // jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
}

passport.use(
  'jwt',
  new JWTstrategy(opts, (jwtPayload, done) => {
    try {
      db.findUserJWT(jwtPayload.id)
        .then(user => {
          if (user) {
            console.log('user found in db in passport')
            done(null, user)
          } else {
            console.log('user not found in db')
            done(null, false)
          }
        })
    } catch (err) {
      done(err)
    }
  })
)
