import { addHabit } from '../api/apiClient'

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  }
}

export const setHabit = (habit) => {
  return {
    type: 'SET_HABIT',
    habit
  }
}

export const saveHabit = (habit) => {
  return dispatch => {
    addHabit(habit)
      .then((allHabits) => {
        dispatch(setHabit(allHabits))
        return null
      })
      .catch(err =>
        console.log(err))
  }
}
