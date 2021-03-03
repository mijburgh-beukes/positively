/* eslint-disable camelcase */
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

const { formatUserData } = require('../formatter')

function getUser (id, db = database) {
  return db('users')
    .join('habits', 'users.id', 'habits.user_id')
    .select(
      'habits.id as habitId',
      'user_id',
      'title',
      'description',
      'habit_icon',
      'total_goal_count',
      'priority',
      'goal_count',
      'firstName',
      'lastName',
      'userImage',
      'totalXp',
      'userImage',
      'users.id as userId'
    )
    .where('users.id', id)
    .then(formatUserData)
}

function getUserById (id, db = database) {
  return db('users')
    .select(
      'firstName',
      'lastName',
      'userImage',
      'totalXp',
      'users.id as userId'
    )
    .where('id', id)
    .first()
}

function updateUser (userId, userChanges, db = database) {
  // TODO validation
  return db('users').where('id', userId).update({
    firstName: userChanges.firstName,
    lastName: userChanges.lastName,
    userImage: userChanges.userImage,
    totalXp: userChanges.totalXp
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
    goal_count: 0
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
  return db('habits')
    .select()
    .where('id', id)
    .first()
    .then(habit => {
      const {
        user_id,
        title,
        id,
        description,
        habit_icon,
        total_goal_count,
        priority,
        goal_count
      } = habit
      const newHabitObj = {
        userId: user_id,
        title,
        habitId: id,
        description,
        habitIcon: habit_icon,
        totalGoalCount: total_goal_count,
        priority,
        goalCount: goal_count
      }
      return newHabitObj
    })
}
function getHabits (id, db = database) {
  return db('habits')
    .select(
      'habits.id as habitId',
      'user_id as userId',
      'title',
      'description',
      'habit_icon as habitIcon',
      'total_goal_count as totalGoalCount',
      'priority',
      'goal_count as goalCount'
    )
    .where('user_id', id)
}

function deleteHabit (habitId, db = database) {
  return db('habits').del().where('id', habitId)
}

function getAllHabits (db = database) {
  return db('habits').select()
}

module.exports = {
  getUser,
  getUserById,
  addHabit,
  editHabit,
  deleteHabit,
  getHabit,
  getHabits,
  getAllHabits,
  updateUser
}
