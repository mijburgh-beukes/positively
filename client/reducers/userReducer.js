const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user

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
        habits: state.habits.filter(habit => habit.habitId !== action.habitId)
      }

    case 'UPDATE_COUNT':
      return {
        ...state,
        habits: state.habits.map((habit) => {
          const newCount = habit.habitId === action.habitId
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

    default :
      return state
  }
}

export default userReducer
