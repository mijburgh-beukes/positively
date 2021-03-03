import React from 'react'
import { connect } from 'react-redux'

import { calculateLevel } from '../utils'

function Achievements ({ user }) {
  const level = calculateLevel(user && user.totalXp)
  return (
    /* add d-none d-md-block to top level div? */
    <div className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-3">
      <h3 className="text-midnight">Achievements</h3>
      <div className="row row-cols-4 gx-2 gy-2">
        <div className="col-sm-6">
          {level >= 5 /* && level < 10 */ ? <AchievementBadge level={'Initiator'} /> : <NextBadge level={'Initiator'}/>}
        </div>
        <div className="col-sm-6">
          {level >= 10 /* && level < 15 */ ? <AchievementBadge level={'Novice'} /> : level >= 5 ? <NextBadge level={'Novice'}/> : <Badge level={'Novice'}/>}
        </div>
        <div className="col-sm-6">
          {level >= 15 /* && level < 20 */ ? <AchievementBadge level={'Pro'} /> : level >= 10 ? <NextBadge level={'Pro'}/> : <Badge level={'Pro'}/>}
        </div>
        <div className="col-sm-6">
          {level >= 20 ? <AchievementBadge level={'Expert'} /> : level >= 15 ? <NextBadge level={'Expert'}/> : <Badge level={'Expert'}/>}
        </div>
      </div>
    </div>
  )
}

function NextBadge ({ level }) {
  return (
    <div data-testid="next-badge" className="aspire-badge-next">
      <p className="mb-0 lh-sm">Up next <br></br><strong>{ level }</strong></p>
    </div>
  )
}

function Badge ({ level }) {
  return (
    <div data-testid="aspire" className="aspire-badge">
      <p className="mb-4"><br></br><strong>{ level }</strong></p>
    </div>
  )
}

function AchievementBadge ({ level }) {
  return <div data-testid="achieved" className="achievement-badge">{level}</div>
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Achievements)
