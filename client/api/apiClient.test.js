import nock from 'nock'
import { getUser, patchUser, addHabit, patchHabit, deleteHabit } from '../api/apiClient'

describe('getUser', () => {
  const fakeUser = [{
    id: 2,
    firstName: 'Allyson',
    lastName: 'Wonderland',
    userImage: 'Image goes here',
    totalXp: 0,
    pw: 'abc123'
  }]
  const scope = nock('http://localhost')
    .get('/api/v1/user/2')
    .reply(200, fakeUser)

  test('returns user from api', () => {
    expect.assertions(2)
    return getUser(2).then((user) => {
      expect(user).toEqual(fakeUser[0])
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})

describe('patchUser', () => {
  const newXp = { totalXp: 125 }
  const updatedUser = {
    id: 2,
    firstName: 'Allyson',
    lastName: 'Wonderland',
    userImage: 'Image goes here',
    totalXp: 125,
    pw: 'abc123'
  }
  const scope = nock('http://localhost')
    .patch('/api/v1/user/2', newXp)
    .reply(201, updatedUser)

  test('updates user details', () => {
    expect.assertions(2)
    return patchUser(2, newXp)
      .then((patchedUser) => {
        expect(patchedUser).toEqual(updatedUser)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('addHabit', () => {
  const newHabit = {
    id: 1,
    title: 'run once a week',
    userId: 2,
    description: 'run at least once per week, 5km',
    habitIcon: 'haUDhsLKF',
    totalGoalCount: 20,
    priority: 4,
    goalCount: 0
  }
  const scope = nock('http://localhost')
    .post('/api/v1/habit')
    .reply(201, newHabit)

  test('posts new habit to api', () => {
    expect.assertions(2)
    return addHabit(newHabit)
      .then((habit) => {
        expect(habit).toEqual(newHabit)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('patchHabit', () => {
  const newGC = { goalCount: 12 }
  const fakeHabit = {
    id: 1,
    title: 'run once a week',
    userId: 2,
    description: 'run at least once per week, 5km',
    habitIcon: 'haUDhsLKF',
    totalGoalCount: 20,
    priority: 4,
    goalCount: 12
  }
  const scope = nock('http://localhost')
    .patch('/api/v1/habit/1', newGC)
    .reply(201, fakeHabit)

  test('updates habit details', () => {
    expect.assertions(2)
    return patchHabit(1, newGC)
      .then((patchedHabit) => {
        expect(patchedHabit).toEqual(fakeHabit)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})

describe('deleteHabit', () => {
  const scope = nock('http://localhost')
    .delete('/api/v1/habit/1')
    .reply(200, {})

  test('deleteHabit deletes habit by given id', () => {
    expect.assertions(1)
    return deleteHabit(1)
      .then(() => {
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})
