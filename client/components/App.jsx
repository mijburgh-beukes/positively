import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../api/apiClient'
import { setUser } from '../actions'

// Components
import Dashboard from './Dashboard'
import Profile from './Profile'
import AddHabit from './AddHabit'

const App = (props) => {
  useEffect(() => {
    // TODO: Remove hardcoding of user ID
    getUser(1)
      .then((user) => {
        props.dispatch(setUser(user))
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Dashboard />
      <Profile />
      <AddHabit />
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps)(App)
