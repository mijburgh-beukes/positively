const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user

    case 'SET_HABIT':
      return action.habit

    case 'UPDATE_HABIT':
      return state.habits.map(habit => habit.id === action.id ? action.habit : habit)

    case 'DELETE_HABIT':
      return state.habits.filter(habit => habit.id !== action.id)

    default :
      return state
  }
}

export default reducer