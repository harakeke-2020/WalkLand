import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileBanner extends Component {
    render() {
        return (
            <>
                <div className="profile-top-content-left" >{this.props.welcome}</div>
                <div className="profile-top-content-right"></div>
            </>
        )
    }
}


export default ProfileBanner
