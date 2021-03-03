import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../api/apiClient'
import { setUser } from '../actions'

// Components
import Nav from './Nav'
import Dashboard from './Dashboard'
import Profile from './Profile'
import EditHabits from './EditHabits'
import AddHabit from './AddHabit'
import Login from './Login'

import { Route, Switch, Redirect } from 'react-router-dom'

function App ({ dispatch }) {
  const [login, setLogin] = useState(0)

  if (login > 0) {
    console.log('User ID: ', login, ' has logged in')
    getUser(login)
      .then(user1 => {
        dispatch(setUser(user1))
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      { login > 0
        ? <div className="app container-lg rounded-3 gx-0">
          <div className="row gx-3">
            <div className="col-lg-1">
              <Nav />
            </div>
            <div className="col mx-auto ms-lg-0 ms-md-3">
              <Switch>
                {/* TODO fix up Profile component path */}
                <Route exact path="/" component={Dashboard} />
                <Route path="/addhabit" component={AddHabit} />
                <Route path="/user/:id" component={Profile} />
                <Route path="/edithabits" component={EditHabits} />

                <Route exact path="/login">
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        : <Switch>
          <Route exact path="/register">
            <h1>register</h1>
          </Route>
          <Route exact path="/login">
            <Login setLogin={setLogin} />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      }
    </>
  )
}

export default connect()(App)
