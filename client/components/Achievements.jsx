import React from 'react'
import { connect } from 'react-redux'

import { calculateLevelv2 } from '../utils'

function Achievements({ user }) {
  let level = calculateLevelv2(user.totalXp)

  return (
    /* add d-none d-md-block to top level div? */
    <div className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-3">
      <h3 className="text-midnight">Badges</h3>
      <div className="row row-cols-4 gx-2 gy-2">
        <div className="col-sm-6">
          {level >= 5 ? <AchievementBadge level={level} /> : <Badge />}
        </div>
        <div className="col-sm-6">
          <Badge />
        </div>
        <div className="col-sm-6">
          <Badge />
        </div>
        <div className="col-sm-6">
          <Badge />
        </div>
      </div>
    </div>
  )
}

function Badge() {
  return (
    <div className="achievement-badge">
      <p className="mb-0">Badge</p>
    </div>
  )
}

function AchievementBadge({ level }) {
  return (
    <div className="achievement-badge">
      <p className="mb-0">
        <div>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/vectors-market"
            title="Vectors Market">
            Vectors Market
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Achievements)
