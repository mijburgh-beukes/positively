import React from 'react'

import { connect } from 'react-redux'

import { updateCount, updateXp } from '../actions/index'
import { patchHabit } from '../api/apiClient'

function Habit ({ dispatch, habit, user }) {
  function handleCount () {
    const newCount = habit.goalCount + 1
    patchHabit(habit.id, { goalCount: newCount })
      .then(() => {
        dispatch(updateCount(habit.id, newCount))
        return null
      })
      .then(() => {
        dispatch(updateXp(user.totalXp + 25))
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='habitListItem'>
      {<p>{habit.title}</p>}
      <button className='plusButton' onClick={handleCount}>
        <span>+</span>
      </button>
    </div>
  )
}

export default connect()(Habit)
