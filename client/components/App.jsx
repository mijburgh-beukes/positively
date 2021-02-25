import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../api/apiClient'
import { setUser } from '../actions'

// Components
import Nav from './Nav'
import Dashboard from './Dashboard'
import Profile from './Profile'

const App = ({ dispatch, user }) => {
  useEffect(() => {
    // TODO: Remove hardcoding of user ID
    getUser(1)
      .then((user) => {
        dispatch(setUser(user))
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="app">
      <Nav />
      <Dashboard />
      <Profile />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
