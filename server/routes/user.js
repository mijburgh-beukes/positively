const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getUser(id)
    .then((userData) => {
      res.json(userData[0])
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/:id', (req, res) => {
  const userId = Number(req.params.id)
  const userChanges = req.body
  db.updateUser(userId, userChanges)
    .then(() => res.status(200).send('Success'))
    .catch(err => res.status(500).send('DATABASE ERROR: ' + err.message))
})
