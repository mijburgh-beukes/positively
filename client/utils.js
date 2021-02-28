function calculateLevel (xp) {
  const level = 250
  return Math.floor(xp / level)
}

function calculateLevelv2 (xp) {
  return Math.floor((1 + Math.sqrt(1 + (8 * xp) / 50)) / 2)
}

function findTopHabit (user) {
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

function findBottomTwoHabits (user) {
  const { habits } = user
  const bottomTwo = habits?.sort(function (a, b) {
    return a.goalCount - b.goalCount
  })
  return bottomTwo
}

module.exports = {
  calculateLevel,
  calculateLevelv2,
  findTopHabit,
  findBottomTwoHabits
}
