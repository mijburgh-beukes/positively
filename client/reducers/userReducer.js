const userReducer = (state = { habits: [] }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user

    case 'SET_HABITS':
      return {
        ...state,
        habits: action.habits
      }

    case 'ADD_HABIT':
      return {
        ...state,
        habits: [...state.habits, action.habit]
      }

    case 'UPDATE_HABIT':
      return {
        ...state,
        habits: state.habits.map((habit) => {
          const updatedHabit = habit.habitId === action.habit.habitId
          return updatedHabit ? action.habit : habit
        })
      }

    case 'DELETE_HABIT':
      return {
        ...state,
        habits: state.habits.filter(habit => habit.habitId !== action.id)
      }

    case 'UPDATE_COUNT':
      return {
        ...state,
        habits: state.habits.map((habit) => {
          const newCount = habit.habitId === action.id
          return {
            ...habit,
            goalCount: newCount ? action.goalCount : habit.goalCount
          }
        })
      }

    case 'UPDATE_XP':
      return {
        ...state,
        totalXp: action.xp
      }

    case 'RESET_COUNT':
      return {
        ...state,
        habits: state.habits.map((habit) => {
          const clearCount = habit.habitId === action.habitId
          return {
            ...habit,
            goalCount: clearCount ? action.cleanCount : habit.goalCount
          }
        })
      }

    default :
      return state
  }
}

export default userReducer
