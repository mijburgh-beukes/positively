import React from 'react'

import { connect } from 'react-redux'

import { updateCount, updateXp } from '../actions/index'
import { patchHabit } from '../api/apiClient'

// onClick function to update user totalXp for each click - number of exp points to be decided
// TODO: button function to add Exp to user totalXp

function Habit ({ dispatch, habit, user }) {
  function handleCount () {
    const newCount = habit.goalCount + 1
    patchHabit(habit.id, { goalCount: newCount })
      .then(() => {
        // const habitObj ={
        //   habitID: habit.id,
        //   newCount
        dispatch(updateCount(habit.id, newCount))
        return null
      }
      )
      .catch(err => console.log(err))
    // DB function call
      // .then(() => {
      //   console.log('line 20 ' + user.id)
      //   dispatch(updateXp(user.id, user.totalXp + 25))
      //   return null
      // })
  }

  // Function to update user xp in redux state:

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
