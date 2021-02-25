const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

const { formatUserData } = require('../formatter')

function getUser(id, db = database) {
  return db('users')
    .join('habits', 'users.id', 'habits.user_id')
    .select()
    .where('users.id', id)
    .then(formatUserData)
}

function addHabit(habit, db = database) {
  const {
    title,
    description,
    habit_icon,
    total_goal_count,
    priority,
    goal_count
  } = habit
  return db('habits').insert({
    user_id: 1,
    title,
    description,
    habit_icon,
    total_goal_count,
    priority,
    goal_count
  })
}

function editHabit(userId, changes, db = database) {
  return db('habits')
    .update({
      title: changes.title,
      description: changes.description,
      habit_icon: changes.habitIcon,
      total_goal_count: changes.totalGoalCount,
      priority: changes.priority
    })
    .where('user_id', userId)
    .then(id => getHabit(id, db))
}

function getHabit(id, db) {
  return db('habits').select().where('id', id)
}

module.exports = {
  getUser,
  addHabit,
  editHabit
}
