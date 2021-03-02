function formatHabitData (usersLine) {
  // eslint-disable-next-line camelcase
  const { habitId, title, description, habit_icon, total_goal_count, priority, goal_count } = usersLine
  return {
    habitId,
    title,
    description,
    habitIcon: habit_icon,
    totalGoalCount: total_goal_count,
    priority,
    goalCount: goal_count
  }
}

function formatUserObject (usersLine) {
  const { userId, firstName, lastName, userImage, totalXp } = usersLine
  return {
    userId,
    firstName,
    lastName,
    userImage,
    totalXp,
    habits: [formatHabitData(usersLine)]
  }
}

function formatUserData (usersLines) {
  const usersList = []
  usersLines.forEach(item => {
    console.log(item)
    const user = usersList.find(user => user.userId === item.user_id)
    !user
      ? usersList.push(formatUserObject(item))
      : user.habits = ([...user.habits, formatHabitData(item)])
  })
  return usersList
}

module.exports = {
  formatUserData
}
