import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
    render() {
        return (
            <>
                <div className="profile-container">
                    <div className="profile-header">
                        <img className='profile-logo' src='images/mainlogo.png' />
                    </div>

                    <div className="profile-picture">
                        Welcome, {this.props.username}!
                        <img className="profile-picture-image" src='images/userProfile.png'/>
                    </div>

                    <div className="profile-bio">
                    </div>

                    <div className="profile-reviews">
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.login
    }
}

export default connect(mapStateToProps)(Profile)
