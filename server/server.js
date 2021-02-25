const path = require('path')
const express = require('express')
const cors = require('cors')

const user = require('./routes/user')
const habit = require('./routes/habit')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/user', user)

server.use('/api/v1/habit', habit)

server.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../server/public/index.html'))
)

module.exports = server
