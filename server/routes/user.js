const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getUser(id)
    .then((user) => {
      res.json(user)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
