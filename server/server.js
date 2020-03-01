const path = require('path')
const express = require('express')
const auth = require('./routes/authRoutes')
const walks = require('./routes/walks')
const Cors = require('cors')
const passport = require('passport')
const bodyParser = require('body-parser')

const server = express()

require('./config/passport')

server.use(Cors())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(passport.initialize())
// server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/auth', auth)
server.use('/api/v1/walks', walks)

module.exports = server
