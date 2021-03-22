const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const {
  getUser,
  getUserById,
  editHabit,
  deleteHabit,
  getAllHabits,
  addHabit,
  updateUser,
  getUserByName,
  addUser
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
      .then(() => getAllHabits(connection))
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
        return null
      })
  })
})

describe('addHabit', () => {
  const mockHabit = {
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
      .then(() => getAllHabits(connection))
      .then(habits => {
        expect(habits).toHaveLength(7)
        return null
      })
  })
})

describe('getUserByName', () => {
  it('get a user by name', () => {
    const name = 'Bob'
    expect.assertions(1)
    return getUserByName(name, connection).then(user => {
      expect(user[0].firstName).toEqual(name)
      return null
    })
  })
})

describe('addUser', () => {
  it('should add a new user to users table', () => {
    const mockUser = { firstName: 'jim', lastName: 'bob', userImage: 'abc123' }
    expect.assertions(3)
    return addUser(mockUser, connection)
      .then(id => getUserById(id, connection))
      .then(user => {
        expect(user.firstName).toEqual(mockUser.firstName)
        expect(user.lastName).toEqual(mockUser.lastName)
        expect(user.userImage).toEqual(mockUser.userImage)
        return null
      })
  })
})
