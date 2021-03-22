function calculateLevel (xp) {
  const level = 250
  return Math.floor(xp / level)
}

function calculateLevelv2 (xp) {
  return Math.floor((1 + Math.sqrt(1 + (8 * xp) / 50)) / 2)
}

function orderedHabitsByGoalCount (user) {
  const { habits } = user
  const orderedHabitsByGC = habits?.sort(function (a, b) {
    return a.goalCount - b.goalCount
  })
  return orderedHabitsByGC
}

module.exports = {
  calculateLevel,
  calculateLevelv2,
  orderedHabitsByGoalCount
}
