import React from 'react'

import { connect } from 'react-redux'

// 1 - onClick function to update habit - sends updated habit data to server to write to DB
// onClick function to update user totalXp for each click - number of exp points to be decided
// TODO: button function to add count to goalCount
// TODO: button function to add Exp to user totalXp

function Habit ({ habitObj }) {
  // console.log('habitListItem', habitObj)
  const { goalCount } = habitObj

  function incrementItem () {
    return updateCount(count + 1)
  }

  return (
    <div className='habitListItem'>
      {<p>{habitObj.title}</p>}
      <button aria-label='delete' onClick={incrementItem}>
        <span className='habitButton' src="/public" alt="plus-button">+</span>
      </button>
    </div>
  )
}

export default connect()(Habit)
