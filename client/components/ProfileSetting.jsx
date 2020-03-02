import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProfile } from './actions/authActions'

import activePage from './actions/activePage'

class ProfileSetting extends Component {

    deleteToken = () => {
        localStorage.removeItem('token')
    }

    render() {
        return (
            <>
                <button onClick={() => { this.props.deleteProfile(); this.props.stateHandler(); this.deleteToken(); this.props.activePage('map') }}>Delete profile?</button>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProfile: () => dispatch(deleteProfile()),
        activePage: (destination) => dispatch(activePage(destination))

    }
}

export default connect(null, mapDispatchToProps)(ProfileSetting)
