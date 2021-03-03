import React from 'react'
import { connect } from 'react-redux'
// TODO: confirm habitList component location - tentatively imported here

import Achievements from './Achievements'
import Agenda from './Agenda'
import UserDetails from './UserDetails'

const Dashboard = ({ user }) => {
  return (
    <div className="row gx-3 pe-3 py-3 ps-3 ps-md-0">
      <div className="col-md-8">
        <div className="hero shadow-sm rounded-3 px-3 pb-3 pt-3 mb-3">
          <h1>
            Hello{' '}
            <span className="text-accent">{`${user.firstName} ${user.lastName}`}</span>
          </h1>
          <p>Here&apos;s an overview of your lifestyle ...</p>
        </div>
        <Agenda />
      </div>
      <div className="col-md-4">
        <div className="mb-3">
          <UserDetails />
        </div>
        <Achievements />
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard)
