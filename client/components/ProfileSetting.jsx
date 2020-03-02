import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProfile } from './actions/authActions'

import activePage from './actions/activePage'

class ProfileSetting extends Component {
    deleteToken = () => {
      localStorage.removeItem('token')
    }

    render () {
      return (
            <>
                <button onClick={() => { this.props.deleteProfile(this.props.auth); this.props.stateHandler(); this.deleteToken(); this.props.activePage('map') }}>Delete profile?</button>
            </>
      )
    }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProfile: user => dispatch(deleteProfile(user)),
    activePage: (destination) => dispatch(activePage(destination))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSetting)
