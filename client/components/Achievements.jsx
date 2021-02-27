import React from 'react'
import { connect } from 'react-redux'

function Achievements (props) {
  return (
    <div className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-3">
      <h3 className="module-header">Achievements</h3>
      <div className="row row-cols-2 gx-2">
        <div className="col-sm-3">
          <Badge />
        </div>
        <div className="col-sm-3">
          <Badge />
        </div>
        <div className="col-sm-3">
          <Badge />
        </div>
        <div className="col-sm-3">
          <Badge />
        </div>
      </div>
    </div>
  )
}

function Badge (props) {
  return (
    <div className="achievement-badge">
      <p className="mb-0">Badge</p>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Achievements)
