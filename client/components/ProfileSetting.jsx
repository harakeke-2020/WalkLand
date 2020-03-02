import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProfile } from './actions/authActions'

class ProfileSetting extends Component {
    render() {
        return (
            <>
                <button onClick={() => {this.props.deleteProfile(); this.props.stateHandler()}}>Delete profile?</button>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProfile: () => dispatch(deleteProfile())
    }
}
export default connect(null, mapDispatchToProps)(ProfileSetting)
