const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

const { formatUserData } = require('../formatter')

function getUser (id, db = database) {
  return db('users')
    .join('habits', 'users.id', 'habits.user_id')
    .select()
    .where('users.id', id)
    .then(formatUserData)
}

function getUserById (id, db = database) {
  return db('users')
    .select('firstName', 'lastName', 'userImage', 'totalXp', 'pw')
    .where('id', id)
    .first()
}

function updateUser (userId, userChanges, db = database) {
  return db('users').where('id', userId).update({
    firstName: userChanges.firstName,
    lastName: userChanges.lastName,
    userImage: userChanges.userImage,
    totalXp: userChanges.totalXp,
    pw: userChanges.pw
  })
}

function addHabit (habit, db = database) {
  return db('habits').insert({
    user_id: habit.userId,
    title: habit.title,
    description: habit.description,
    habit_icon: habit.habitIcon,
    total_goal_count: habit.totalGoalCount,
    priority: habit.priority,
    goal_count: habit.goalCount
  })
}

function editHabit (id, changes, db = database) {
  return db('habits')
    .update({
      title: changes.title,
      description: changes.description,
      habit_icon: changes.habitIcon,
      total_goal_count: changes.totalGoalCount,
      priority: changes.priority,
      goal_count: changes.goalCount
    })
    .where('id', id)
    .then(() => getHabit(id, db))
}

function getHabit (id, db = database) {
  return db('habits').select().where('id', id).first()
}
function getHabits (db = database) {
  return db('habits').select()
}

function deleteHabit (habitId, db = database) {
  return db('habits').del().where('id', habitId)
}

module.exports = {
  getUser,
  getUserById,
  addHabit,
  editHabit,
  deleteHabit,
  getHabit,
  getHabits,
  updateUser
}
