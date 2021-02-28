import React from 'react'
import { connect } from 'react-redux'

import { calculateLevel } from '../utils'

const UserDetails = ({ user }) => {
  const userLevel = calculateLevel(user.totalXp)
  return (
    <div className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-3 mb-md-3 d-none d-sm-block">
      <div className="card">
        <img
          src={user.userImage}
          className="card-img-top rounded-circle w-75 mx-auto mb-2"
          alt="..."
        />
        <div className="card-body mx-auto py-0">
          <h5 className="card-title text-center">{`${user.firstName} ${user.lastName}`}</h5>

          <div className="power-level">{`Level ${userLevel} habiteer`}</div>
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

export default connect(mapStateToProps)(UserDetails)
