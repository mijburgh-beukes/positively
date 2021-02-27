const { calculateLevel } = require('./utils')

const xp = 775

describe('calculateLevel function', () => {
  it('should calculate the level based off xp', () => {
    let level = calculateLevel(xp)
    expect(level).toEqual(3)
  })
})
