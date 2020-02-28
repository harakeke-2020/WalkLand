const path = require('path')
const express = require('express')
const auth = require('./routes/authRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/auth', auth)


module.exports = server
