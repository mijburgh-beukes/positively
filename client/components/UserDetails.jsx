import React from 'react'
import { connect } from 'react-redux'

const UserDetails = () => {
  return (
    <div className="container-sm">
      <div className="card d-flex justify-content-center">
        <img
          src="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg"
          className="card-img-top rounded-circle w-25 m-auto"
          alt="..."
        />
        <div className="card-body m-auto">
          <h5 className="card-title text-center">username</h5>

          <div className="power-level">Level 3 habiteer</div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserDetails)
