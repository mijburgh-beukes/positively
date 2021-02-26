import React, { useState } from 'react'

import { connect } from 'react-redux'

import { updateCount } from '../actions/index'
import { patchHabit } from '../api/apiClient'

// Start with db updating redux  state!!

// onClick function to update habit - sends updated habit data to server to write to DB
// onClick function to update user totalXp for each click - number of exp points to be decided
// TODO: button function to add count to goalCount
// TODO: button function to add Exp to user totalXp

function Habit ({ dispatch, habitObj }) {
  console.log(habitObj.id)

  let count = habitObj.goalCount

  function handleCount () {
    // need the new goalCount and habit id to update the entry,
    // send info to api, then to route, then to db..
    patchHabit(1, { goalCount: count++ })

    // updateCount(habitObj.id)
    //   .then(() => {
    //     return null
    //   })
    //   .catch(err => console.log(err))
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
