import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../api/apiClient'
import { setUser } from '../actions'

// Components
import Nav from './Nav'
import Dashboard from './Dashboard'
import Profile from './Profile'
import EditHabits from './EditHabits'
import AddHabit from './AddHabit'

import { Route, Switch } from 'react-router-dom'

function App ({ dispatch }) {
  useEffect(() => {
    // TODO: Remove hardcoding of user ID
    getUser(1)
      .then(user1 => {
        console.log(user1)
        dispatch(setUser(user1))
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="app container-lg rounded-3 gx-0">
      <div className="row gx-3">
        <div className="col-lg-1">
          <Nav />
        </div>
        <div className="col mx-auto ms-lg-0 ms-md-3">
          <Switch>
            {/* TODO fix up Profile component path */}
            <Route exact path="/" component={Dashboard} />
            <Route path="/addhabit" component={AddHabit}/>
            <Route path="/user/:id" component={Profile} />
            <Route path="/edithabits" component={EditHabits} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default connect()(App)
