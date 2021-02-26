import React, { useState } from 'react'

import { connect } from 'react-redux'

import { updateCount } from '../actions/index'
import { patchHabit } from '../api/apiClient'

// Start with db updating redux  state!!

// onClick function to update user totalXp for each click - number of exp points to be decided
// TODO: button function to add count to goalCount
// TODO: button function to add Exp to user totalXp

function Habit ({ dispatch, habitObj }) {
  const { id } = habitObj
  let count = habitObj.goalCount

  function handleCount () {
    patchHabit(id, { goalCount: count++ })
      .then((updatedHabit) => {
        const { id } = updatedHabit
        console.log(id)
        // dispatch(updateCount(habitObj.id))
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='habitListItem'>
      {<p>{habitObj.title}</p>}
      <button className='plusButton' onClick={handleCount}>
        <span>+</span>
      </button>
    </div>
  )
}

export default connect()(Habit)
