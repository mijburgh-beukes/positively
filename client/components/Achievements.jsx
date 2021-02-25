import React from 'react'
import { connect } from 'react-redux'

function Achievements (props) {
  return (
    <div className="container-sm">
      <h4>Achievements</h4>
      <div className="row row-cols-2">
        <div className="col-sm-3">Badge1</div>
        <div className="col-sm-3">Badge2</div>
        <div className="col-sm-3">Badge3</div>
        <div className="col-sm-3">NextUp</div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Achievements)
