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
  return dispatch => {
    postHabit(habit)
      .then((newHabit) => {
        const {
          user_id, title,
          description, habit_icon,
          total_goal_count,
          priority, goal_count
        } = newHabit
        const newHabitObj = {
          userId: user_id,
          title,
          description,
          habitIcon: habit_icon,
          totalGoalCount: total_goal_count,
          priority,
          goalCount: goal_count
        }
        dispatch(addHabit(newHabitObj))
        return null
      })
      .catch(err =>
        console.log(err))
  }
}

export const removeHabit = (id) => {
  return dispatch => {
    console.log(id)
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
    patchHabit(habit.id, { goalCount: newCount })
      .then(() => {
        dispatch(updateCount(habit.id, newCount))
        return null
      })
      .then(() => {
        patchUser(user.id, { totalXp: newXP })
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
