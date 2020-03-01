const path = require('path')
const express = require('express')
const auth = require('./routes/authRoutes')
const walks = require('./routes/walks')
const rating = require('./routes/rating')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/auth', auth)
server.use('/api/v1/walks', walks)
server.use('/api/v1/rating', rating)


module.exports = server
