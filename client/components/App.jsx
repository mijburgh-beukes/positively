import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../api/apiClient'
import { setUser } from '../actions'

// Components
import Nav from './Nav'
import Dashboard from './Dashboard'
import Profile from './Profile'

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
    <div className="app container-lg rounded-3 gx-0">
      <div className="row gx-3">
        <div className="col-md-1">
          <Nav />
        </div>
        <div className="col-sm-11 mx-auto">
          <Switch>
            <Route path="/user/:id" component={Profile} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
