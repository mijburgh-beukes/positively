const { calculateLevel, calculateLevelv2 } = require('./utils')

const xp = 775

describe('calculateLevel function', () => {
  it('should calculate the level based off xp', () => {
    let level = calculateLevel(xp)
    expect(level).toEqual(3)
  })
})

describe('calculateLevelv2 function', () => {
  it('should calculate the level based of xp', () => {
    let level = calculateLevelv2(xp)
    expect(level).toEqual(6)
  })
})
