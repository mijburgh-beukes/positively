import React from 'react'
import { connect } from 'react-redux'

function Achievements (props) {
  return (
    <div className="container-sm shadow module px-3 pb-2 pt-3">
      <h2 className="module-h2">Achievements</h2>
      <div className="row row-cols-2">
        <div className="col-sm-3 py-2">
          <Badge />
        </div>
        <div className="col-sm-3 py-2">
          <Badge />
        </div>
        <div className="col-sm-3 py-2">
          <Badge />
        </div>
        <div className="col-sm-3 py-2">
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
