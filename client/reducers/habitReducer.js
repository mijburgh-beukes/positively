const habitReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_HABIT':
      return action.habit
    case 'UPDATE_HABIT':
      return state.map(habit => habit.id === action.habit.id ? action.habit : habit)
    case 'DELETE_HABIT':
      return state.filter(habit => habit.id !== action.id)
    default :
      return state
  }
}

export default habitReducer
