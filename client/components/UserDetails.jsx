import React from 'react'
import { connect } from 'react-redux'

const UserDetails = () => {
  return (
    <div className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-3 mb-3">
      <div className="card">
        <img
          src="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg"
          className="card-img-top rounded-circle w-75 mx-auto mb-2"
          alt="..."
        />
        <div className="card-body mx-auto py-0">
          <h5 className="card-title text-center">username</h5>

          <div className="power-level">Level 3 habiteer</div>
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
