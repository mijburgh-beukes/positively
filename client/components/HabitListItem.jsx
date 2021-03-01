import React from 'react'

import { connect } from 'react-redux'

import { handleCount } from '../actions/index'

function Habit ({ dispatch, habit, user }) {
  const topHabitTitle = habit ? habit.title : null
  const topHabitGoalCount = habit ? habit.goalCount : null

  function handleTheCount () {
    dispatch(handleCount(habit, user))
  }

  return (
    <div className='habitListItem'>
      <div>
        {`${topHabitTitle} - ${topHabitGoalCount} `}
        <button className='plusButton' onClick={handleTheCount}>
          <span>+</span>
        </button>
      </div>
    </div>
  )
}

export default connect()(Habit)
