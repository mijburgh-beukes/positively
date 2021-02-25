const habitReducer = (state = [{
  id: 1,
  user_id: 1,
  title: 'updatedrunning',
  description: 'go for a run everyday',
  habit_icon: 'some icon',
  total_goal_count: 0,
  priority: 4,
  goal_count: 0
}], action) => {
  switch (action.type) {
    case 'SET_HABIT':
      return action.habit

    case 'UPDATE_HABIT':
      return state.map(habit => habit.id === action.habit.it ? action.habit : habit)

    case 'DELETE_HABIT':
      return state.filter(habit => habit.id !== action.id)

    default :
      return state
  }
}

export default habitReducer
