import React from 'react'

import { connect } from 'react-redux'

import { updateCount, updateXp } from '../actions/index'
import { patchHabit, patchUser } from '../api/apiClient'

function Habit ({ dispatch, habit, user }) {
  const topHabitTitle = habit ? habit.title : null
  const topHabitGoalCount = habit ? habit.goalCount : null

  function handleCount () {
    const newCount = habit.goalCount + 1
    const newXP = user.totalXp + 25
    patchHabit(habit.id, { goalCount: newCount })
      .then(() => {
        dispatch(updateCount(habit.id, newCount))
        return null
      })
      .then(() => {
        patchUser(user.id, { totalXp: newXP })
        return null
      })
      .then(() => {
        dispatch(updateXp(newXP))
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='accentBG text-white ps-2 pe-1 rounded-2 mb-2'>
      <div className="ps-1 py-1 d-flex justify-content-between align-items-center">
        {`${topHabitTitle} - ${topHabitGoalCount} `}
        <button className='plusButton' onClick={handleCount}>
          <span>+</span>
        </button>
      </div>
    </div>
  )
}

export default connect()(Habit)
