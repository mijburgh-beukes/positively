const level = 250

function calculateLevel(xp) {
  return Math.floor(xp / level)
}

function calculateLevelv2(xp) {
  return Math.floor((1 + Math.sqrt(1 + (8 * xp) / 50)) / 2)
}

module.exports = { calculateLevel, calculateLevelv2 }
