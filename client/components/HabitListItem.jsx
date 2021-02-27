import React from 'react'

import { connect } from 'react-redux'

import { updateCount } from '../actions/index'
import { patchHabit } from '../api/apiClient'

// onClick function to update user totalXp for each click - number of exp points to be decided
// TODO: button function to add Exp to user totalXp

function Habit ({ dispatch, habit }) {
  function handleCount () {
    const newCount = habit.goalCount + 1
    patchHabit(habit.id, { goalCount: newCount })
      .then(() => {
        dispatch(updateCount(habit.id, newCount))
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
