import userReducer from './userReducer'
import { setHabit, deleteTheHabit } from '../actions'

const fakeUser = {
  id: 1,
  firstName: 'Jack',
  LastName: 'Nicholson',
  habits: [
    { id: 1, title: 'go for a run everyday' },
    { id: 2, title: 'read 30 pages a day' }
  ]
}

const updatedFakeUser = {
  id: 1,
  firstName: 'Jack',
  LastName: 'Nicholson',
  habits: [
    { id: 1, title: 'go for a run every other day' },
    { id: 2, title: 'star in one movie per week!' }
  ]
}

describe('userReducer', () => {
  test('initial state is an empty array', () => {
    const state = userReducer(undefined, { type: '_INIT_' })
    expect(state).toEqual([])
  })

  test('SET_HABIT overwrites habits in the state', () => {
    const action = setHabit(updatedFakeUser)
    const state = userReducer(fakeUser, action)
    expect(state).toEqual(updatedFakeUser)
  })

  test('DELETE_HABIT removes habit with the matching id from state', () => {
    const action = deleteTheHabit(1)
    const state = userReducer(fakeUser, action)
    expect(state).toHaveLength(1)
  })
})
