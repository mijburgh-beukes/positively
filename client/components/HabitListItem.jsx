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
    dispatch(handleReset(habit.habitId))
  }

  return (
    <div className='accentBG text-white ps-2 pe-1 rounded-2 mb-2'>
      <div className="ps-1 py-1 d-flex justify-content-between align-items-center">
        <div className='counterContainer'>
          <p>{`${topHabitTitle} - `}</p>
          <div className='countIndicator'>
            <p>{`${topHabitGoalCount} `}</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          {habit.goalCount > 0 &&
        <button className='btn resetButton me-2' onClick={handleCounterReset}>
          Reset Count
        </button>
          }
          <button className='plusButton me-1' onClick={handleTheCount}>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default connect()(Habit)
