import React from 'react'
import { connect } from 'react-redux'

const Profile = ({ user }) => {
  console.log(user)
  return (
    <>
      <div>
        <h1>Hey {user.firstName} {user.lastName}!</h1>
        <img src={user.userImage} alt="user-image"/>
        <h2>Level: </h2>
        <p>Current Exp. {user.totalXp}</p>
      </div>
      <div>
        <h3>Current Habits:</h3>
        {user.habits?.map(habit =>
          <div key={habit.id}>
            <h4>{habit.title}</h4>
            <img src={user.habitIcon} alt="habit-icon"/>
            <p>{habit.description}</p>
            <p>Priority: {habit.priority}</p>
            <p>Goal total: {habit.totalGoalCount}</p>
            <p>Goal count: {habit.goalCount}</p>
          </div>)}
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
