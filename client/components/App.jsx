import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../api/apiClient'
import { setUser } from '../actions'

// Components
import Nav from './Nav'
import Dashboard from './Dashboard'
import Profile from './Profile'
import AddHabit from './AddHabit'

import { Route, Switch } from 'react-router-dom'

function App ({ dispatch, user }) {
  // const [currentUser, setUser] = useState(user)

  useEffect(() => {
    // TODO: Remove hardcoding of user ID
    getUser(1)
      .then(user => {
        dispatch(setUser(user))
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/user/:id">
          <Profile />
        </Route>
        <Route path="/habit" component={AddHabit} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
