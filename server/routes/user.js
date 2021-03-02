const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getUserById(id)
    .then(userData => {
      res.json(userData)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id/habits', (req, res) => {
  const { id } = req.params
  db.getHabits(id)
    .then((habitsData) => {
      res.json(habitsData)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/:id', (req, res) => {
  // TODO validation to prevent user from setting their xp
  const userId = Number(req.params.id)
  const userChanges = req.body
  db.updateUser(userId, userChanges)
    .then(() => res.status(200).send('Success'))
    .catch(err => res.status(500).send('DATABASE ERROR: ' + err.message))
})
