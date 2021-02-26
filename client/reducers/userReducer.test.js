import userReducer from './userReducer'
import { addHabit, patchHabit, deleteHabit, createDeleteHabit } from '../actions'

const fakeUser = {
  id: 1,
  firstName: 'Jack',
  LastName: 'Nicholson',
  habits: [
    { id: 1, title: 'go for a run everyday' },
    { id: 2, title: 'read 30 pages a day' }
  ]
}

describe('userReducer', () => {
  test('initial state is an empty array', () => {
    const state = userReducer(undefined, { type: '_INIT_' })
    expect(state).toEqual([])
  })

  test('DELETE_HABIT removes habit with the matching id from state', () => {
    const action = createDeleteHabit(1)
    const state = userReducer(fakeUser, action)
    expect(state).toHaveLength(1)
  })
})
