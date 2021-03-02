/* eslint-disable camelcase */
import { postHabit, patchHabit, deleteHabit, patchUser } from '../api/apiClient'

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  }
}

export const addHabit = (habit) => {
  return {
    type: 'ADD_HABIT',
    habit
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

export const handleCount = (habit, user) => {
  const newCount = habit.goalCount + 1
  const newXP = user.totalXp + 25
  return dispatch => {
    patchHabit(habit.habitId, { goalCount: newCount })
      .then(() => {
        dispatch(updateCount(habit.habitId, newCount))
        return null
      })
      .then(() => {
        patchUser(user.userId, { totalXp: newXP })
        return null
      })
      .then(() => {
        dispatch(updateXp(newXP))
        return null
      })
      .catch(err => console.log(err))
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

export const handleReset = (habitId) => {
  const cleanCount = 0
  return dispatch => {
    patchHabit(habitId, { goalCount: cleanCount })
      .then(() => {
        dispatch(resetCount(habitId, cleanCount))
        return null
      })
      .catch(err => console.log(err))
  }
}

export const resetCount = (habitId, cleanCount) => {
  return {
    type: 'RESET_COUNT',
    habitId,
    cleanCount
  }
}
