const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const { getUser, editHabit } = require('./db')
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

// TODO needs work
describe('editHabit', () => {
  it('should update a habit', () => {
    return editHabit(4, mockHabitChanges, connection).then(habit => {
      expect(habit).toEqual(mockHabitChanges)
      return null
    })
  })
})
