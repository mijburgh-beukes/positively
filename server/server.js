const path = require('path')
const express = require('express')

const initializePassport = require('./passport-config')

const user = require('./routes/user')
const habit = require('./routes/habit')

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, './public')))

const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
})

server.use(expressSession)

server.use('/api/v1/user', user)

server.use('/api/v1/habit', habit)

server.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../server/public/index.html'))
)

module.exports = server

const passport = require('passport')

server.use(passport.initialize())
server.use(passport.session())

initializePassport(passport)

server.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err) }
    if (!user) { return res.sendStatus(401) }

    return res.status(200).json(user)
  })(req, res, next)
})
