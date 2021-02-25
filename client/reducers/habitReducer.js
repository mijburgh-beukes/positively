const habitReducer = (state = [{}], action) => {
  switch (action.type) {
    case 'SET_HABIT':
      return action.habit

    default :
      return state
  }
}

export default habitReducer
