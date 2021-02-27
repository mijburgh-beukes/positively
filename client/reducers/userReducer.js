const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user

    case 'SET_HABIT':
      return action.habit

    case 'UPDATE_HABIT':
      return state.habits.map(habit => habit.id === action.id ? action.habit : habit)

    case 'DELETE_HABIT':
      return state.habits.filter(habit => habit.id !== action.id)

    case 'UPDATE_COUNT':
      return {
        ...state,
        habits: state.habits.map((habit) => {
          const newCount = state.habits.find(habit => habit.id === action.id)
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
