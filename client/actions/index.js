import { postHabit, patchHabit, deleteHabit } from '../api/apiClient'

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  }
}

export const addHabit = (habit) => {
  return {
    type: 'ADD_HABIT',
    habit: habit
  }
}

export const updateTheHabit = (habit) => {
  return {
    type: 'UPDATE_HABIT',
    habit
  }
}

export function deleteTheHabit (id) {
  return {
    type: 'DELETE_HABIT',
    id
  }
}

export const saveHabit = (habit) => {
  console.log(habit)
  return dispatch => {
    postHabit(habit)
      .then((newHabit) => {
        dispatch(addHabit(newHabit))
        return null
      })
      .catch(err =>
        console.log(err))
  }
}

export const removeHabit = (id) => {
  return dispatch => {
    deleteHabit(id)
      .then(() => {
        dispatch(deleteTheHabit(id))
        return null
      })
      .catch(err =>
        console.log(err))
  }
}

export const updateHabit = (id, patchData) => {
  return dispatch => {
    patchHabit(id, patchData)
      .then((habit) => {
        dispatch(updateTheHabit(habit))
        return null
      })
      .catch(err =>
        console.log(err))
  }
}

export const updateCount = (id, goalCount) => {
  return {
    type: 'UPDATE_COUNT',
    id,
    goalCount
  }
}

export const updateXp = (xp) => {
  return {
    type: 'UPDATE_XP',
    xp
  }
}
