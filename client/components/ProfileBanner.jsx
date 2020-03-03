import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileBanner extends Component {
    render() {
        return (
            <>
                <div className="profile-top-children" >You are currently viewing {this.props.user}'s profile</div>
            </>
        )
    }
}


export default ProfileBanner
