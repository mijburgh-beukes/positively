const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const habit = req.body
  db.addHabit(habit)
    .then(habit => {
      return db.getHabit(habit[0])
    })
    .then(newHabit => {
      res.status(201).json(newHabit)
      return null
    })
    .catch(err => res.status(500).send('DATABASE ERROR: ' + err.message))
})

router.patch('/:id', (req, res) => {
  const userId = Number(req.params.id)
  const changes = req.body
  db.editHabit(userId, changes)
    .then(habit => res.json(habit))
    .catch(err => res.status(500).send('DATABASE ERROR: ' + err.message))
})

router.delete('/:id', (req, res) => {
  const habitId = Number(req.params.id)
  db.deleteHabit(habitId)
    .then(habit => {
      res.json(habit)
      return null
    })
    .catch(err => res.status(500).send('DATABASE ERROR: ' + err.message))
})
