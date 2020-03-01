import React, { Component } from 'react'
import { connect } from 'react-redux'

import activePage from './actions/activePage'

class Profile extends Component {
    render() {
        return (
            <>
                <div className="profile-container">
                    <div className="profile-header">
                        <img className='profile-logo' src='images/mainlogo.png' />
                        <button className="profile-header-home-btn" onClick={() => this.props.activePage('map')}>Home</button>
                    </div>

                    <div className="profile-picture">
                        Welcome, {this.props.username}!
                        <img className="profile-picture-image" src='images/userProfile.png' />
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

const mapDispatchToProps = dispatch => {
    return {
        activePage: (destination) => dispatch(activePage(destination))
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
