import React, { useState } from 'react'

import { connect } from 'react-redux'

import { setHabitCount, updateCount } from '../actions/index'
import { patchHabit } from '../api/apiClient'

// onClick function to update user totalXp for each click - number of exp points to be decided
// TODO: button function to add Exp to user totalXp

function Habit ({ dispatch, habit }) {
  function handleCount () {
    patchHabit(habit.id, { goalCount: habit.goalCount + 1 })
    // updates DB goalCount - break in the .then statement for some reason...
    // no error, simply won't update redux store per below:
      .then((res) => {
        console.log(res)
        dispatch(updateCount(habit.id, habit.goalCount))
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
