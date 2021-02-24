const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

function getUser (id, db = database) {
  return db('users')
    .join('habits', 'users.id', 'habits.user_id')
    .select()
    .where('users.id', id)
    .then(formatUserData)
}

function createHabits (usersLine) {
  const { id, title, description, habit_icon, total_goal_count, priority, goal_count } = usersLine
  return {
    id,
    title,
    description,
    habitIcon: habit_icon,
    totalGoalCount: total_goal_count,
    priority,
    goalCount: goal_count
  }
}

function createUser (usersLine) {
  const { id, firstName, lastName, userImage, totalXp, pw } = usersLine
  return {
    id,
    firstName,
    lastName,
    userImage,
    totalXp,
    pw,
    habits: [createHabits(usersLine)]
  }
}

function formatUserData (usersLines) {
  const usersList = []
  usersLines.forEach(item => {
    const user = usersList.find(user => user.id === item.user_id)
    !user
      ? usersList.push(createUser(item))
      : user.habits = ([...user.habits, createHabits(item)])
  })
  return usersList
}

module.exports = {
  getUser
}
