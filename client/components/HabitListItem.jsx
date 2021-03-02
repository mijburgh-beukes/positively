import React from 'react'

import { connect } from 'react-redux'

import { handleCount, handleReset } from '../actions/index'

function Habit ({ dispatch, habit, user }) {
  const topHabitTitle = habit ? habit.title : null
  const topHabitGoalCount = habit ? habit.goalCount : null

  function handleTheCount () {
    dispatch(handleCount(habit, user))
  }

  function handleCounterReset () {
    console.log('testing reset here...')
    dispatch(handleReset(habit.habitId))
  }

  return (
    <div className='accentBG text-white ps-2 pe-1 rounded-2 mb-2'>
      <div className="ps-1 py-1 d-flex justify-content-between align-items-center">
        {`${topHabitTitle} - ${topHabitGoalCount} `}
        {habit.goalCount > 0 &&
        <button className='resetButton' onClick={handleCounterReset}>
          Reset
        </button>
        }
        <button className='plusButton' onClick={handleTheCount}>
          <span>+</span>
        </button>

      </div>
    </div>
  )
}

export default connect()(Habit)
