import React from 'react'
import { connect } from 'react-redux'

import { calculateLevel } from '../utils'

const UserDetails = ({ user }) => {
  const userLevel = calculateLevel(user && user.totalXp)
  const levelProgressDecimal = ((user.totalXp / 250) - userLevel).toFixed(2)
  const levelProgress = (levelProgressDecimal * 100) + '%'

  return (
    /* add d-none d-sm-block to top level div? */
    <div className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-3 ">
      <div className="card">
        <img
          src={user && user.userImage}
          className="card-img-top rounded-circle w-75 mx-auto mb-2 fit-image"
          alt="..."
        />
        <div className="card-body mx-auto py-0 d-flex flex-column justify-content-center">
          <h3 className="card-title text-center text-midnight">{user && `${user.firstName} ${user.lastName}`}</h3>

          <div className="power-level mx-auto mb-3">{`Level ${userLevel} habiteer`}</div>
          Progress towards level {userLevel + 1}
        </div>
        <div className="progress">
          <div className="progress-bar accentBG" style={{ width: levelProgress }} role="progressbar" aria-valuenow={{ levelProgress }} aria-valuemin="0" aria-valuemax="100"></div>
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
