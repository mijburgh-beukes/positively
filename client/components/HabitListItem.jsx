import React from 'react'

import { connect } from 'react-redux'

import { updateHabit } from '../api/apiClient'
// 1 - onClick function to update habit - sends updated habit data to server to write to DB
// onClick function to update user totalXp for each click - number of exp points to be decided
// TODO: button function to add count to goalCount
// TODO: button function to add Exp to user totalXp

function Habit ({ habitObj }) {
  const { goalCount } = habitObj

  // const { count, setCount } = useState(goalCount)

  // function plusCount () {
  //   return patchHabit()
  //     .then(() => {
  //       dispatch(addCount())
  //     })

  return (
    <div className='habitListItem'>
      {<p>{habitObj.title}</p>}
      <button onClick={plusCount}>
        <span className='plusButton' src="" alt="plus-button">+</span>
      </button>
    </div>
  )
}

export default connect()(Habit)
