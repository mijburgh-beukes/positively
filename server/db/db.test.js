const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const { getUser, editHabit, deleteHabit, getHabits } = require('./db')
const { formatUserData } = require('../formatter')
const { mockHabitChanges } = require('../testFixtures/mockEditHabit')

jest.mock('../formatter', () => {
  return {
    formatUserData: jest.fn()
  }
})

beforeAll(() => connection.migrate.latest())
beforeEach(() => connection.seed.run())

describe('getUser', () => {
  it('get userData from database', () => {
    formatUserData.mockImplementation(userLines => Promise.resolve(userLines))

    return getUser(2, connection).then(userData => {
      expect(formatUserData).toHaveBeenCalled()
      expect(userData).toHaveLength(2)
      return null
    })
  })
})

describe('editHabit', () => {
  it('should update a habit', () => {
    return editHabit(4, mockHabitChanges, connection).then(habit => {
      expect(habit).toEqual(mockHabitChanges)
      return null
    })
  })
})

describe('deleteHabit', () => {
  it('should delete a specified habit', () => {
    expect.assertions(1)
    return deleteHabit(7, connection)
      .then(() => getHabits(connection))
      .then(habits => {
        expect(habits.map(habit => habit.id)).toEqual([8, 9])
        return null
      })
  })
})
