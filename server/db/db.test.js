const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const {
  getUser,
  getUserById,
  editHabit,
  deleteHabit,
  getHabits,
  addHabit,
  updateUser
} = require('./db')
const { formatUserData } = require('../formatter')
const { mockHabitChanges } = require('../testFixtures/mockEditHabit')
const { mockUpdateUser } = require('../testFixtures/mockUserData')

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
      expect(userData).toHaveLength(2)
      return null
    })
  })
})

describe('editHabit', () => {
  it('should update a habit', () => {
    return editHabit(7, mockHabitChanges, connection).then(habit => {
      expect(habit).toEqual(mockHabitChanges)
      return null
    })
  })
})

describe('deleteHabit', () => {
  it('should delete a specified habit', () => {
    expect.assertions(1)
    return deleteHabit(13, connection)
      .then(() => getHabits(connection))
      .then(habits => {
        expect(habits.map(habit => habit.id)).toEqual([14, 15, 16, 17, 18])
        return null
      })
  })
})

describe('updateUser', () => {
  it('should update the user data', () => {
    expect.assertions(1)
    return updateUser(10, mockUpdateUser, connection)
      .then(() => getUserById(10, connection))
      .then(user => {
        expect(user).toEqual(mockUpdateUser)
      })
  })
})

describe('addHabit', () => {
  let mockHabit = {
    user_id: 1,
    title: 'Swimming',
    description: 'swimming every second day',
    habit_icon: 'some icon',
    total_goal_count: '50',
    priority: 2,
    goal_count: 35
  }

  it('should add a habit to the habits db', () => {
    return addHabit(mockHabit, connection)
      .then(() => getHabits(connection))
      .then(habits => {
        expect(habits.length).toEqual(7)
      })
  })
})
