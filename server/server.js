const path = require('path')
const express = require('express')
const auth = require('./routes/authRoutes')
const walks = require('./routes/walks')
var cors = require('cors')
var bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(
  bodyParser.urlencoded({
    extended: false
  })
)
server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/auth', auth)
server.use('/api/v1/walks', walks)


module.exports = server
