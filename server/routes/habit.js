const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const { title, description, habitIcon, totalGoalCount, priority, goalCount } = req.body
  const habit = {
    title,
    description,
    habit_icon: habitIcon,
    total_goal_count: totalGoalCount,
    priority,
    goal_count: goalCount
  }
  db.addHabit(habit).then(() => {
    res.sendStatus(201)
  }).catch((e) => {
    res.status(500).send(e)
  })
})
