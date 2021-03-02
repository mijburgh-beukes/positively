import userReducer from './userReducer'
import { addHabit, updateTheHabit, deleteTheHabit } from '../actions'

describe('userReducer', () => {
  test('initial state is an object with a habits property array', () => {
    const state = userReducer({ habits: [] }, { type: '_INIT_' })
    expect(state).toEqual({ habits: [] })
  })

  test('ADD_HABIT adds a habit to the state', () => {
    const fakeHabit = { title: 'take dog for walk everyday' }
    const action = addHabit(fakeHabit)
    const state = userReducer({ habits: [] }, action)
    expect(state.habits).toHaveLength(1)
  })

  test('UPDATE_HABIT overwrites habit in the state', () => {
    const initialHabits = [
      { id: 1, title: 'Gym everyday!!' },
      { id: 2, title: 'Drink 8 glasses of water per-day' }
    ]
    const newHabit = { id: 1, title: 'Gym weekly lol' }
    const action = updateTheHabit(newHabit)
    const state = userReducer({ habits: initialHabits }, action)
    expect(state.habits[0]).toEqual(newHabit)
  })

  test('DELETE_HABIT removes habit with matching id from state', () => {
    const initialHabits = [
      { habitId: 1, title: 'go for daily walks' },
      { habitId: 2, title: 'Eat a vegan meal daily' },
      { habitId: 3, title: 'drink 10 beers daily' }
    ]
    const action = deleteTheHabit(3)
    const state = userReducer({ habits: initialHabits }, action)
    expect(state.habits).toHaveLength(2)
  })
})
