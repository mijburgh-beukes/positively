function calculateLevel (xp) {
  const level = 250
  return Math.floor(xp / level)
}

function findTopHabit (user) {
  console.log(user)
  const { habits } = user
  const valueArray = habits?.map((habit) => habit.goalCount)
  let index = 0
  let value = 0
  valueArray?.forEach((item, i) => {
    if (item > value) {
      index = i
      value = item
    }
  })
  return habits ? habits[index].title : null
}

module.exports = {
  calculateLevel,
  findTopHabit
}
