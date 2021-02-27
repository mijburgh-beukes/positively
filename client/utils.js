const level = 250

function calculateLevel(xp) {
  return Math.floor(xp / level)
}

module.exports = { calculateLevel }
