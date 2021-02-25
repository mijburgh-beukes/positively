import React from 'React'
import { connect } from 'react-redux'

function Achievements (props) {
  return (
    <div className="container">
      <h4>Achievements</h4>
      <div className="row row-cols-2">
        <div className="col">Badge1</div>
        <div className="col">Badge2</div>
        <div className="col">Badge3</div>
        <div className="col">NextUp</div>
      </div>
    </div>
  )
}

export default connect()(Achievements)
