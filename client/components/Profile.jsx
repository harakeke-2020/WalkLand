import React, { Component } from 'react'
import { connect } from 'react-redux'

import activePage from './actions/activePage'
import ProfileSetting from './ProfileSetting'
import ProfileReviews from './ProfileReviews'

class Profile extends Component {

    // Create local state just to handle local changes
    state = {
        currentPage: 'reviews'
    }

    stateHandler = () => {
        this.setState({
            currentPage: 'map'
        })
    }

    render() {
        return (
            <>
                <div className="profile-container">
                    <div className="profile-header">
                        <img className='profile-logo' src='images/mainlogo.png' />
                        <div className="profile-header-btn-group">
                            <button className="profile-header-btn" onClick={() => this.props.activePage('map')}>Home</button>
                            <button className="profile-header-btn" onClick={() => this.setState({ currentPage: 'settings' })}>Settings</button>
                            <button className="profile-header-btn" onClick={() => this.setState({ currentPage: 'reviews' })}>Reviews</button>
                        </div>
                    </div>

                    <div className="profile-picture">
                        Welcome, {this.props.username}!
                        <img className="profile-picture-image" src='images/userProfile.png' />
                    </div>

                    <div className="profile-bio">
                    </div>

                    <div className="profile-reviews">
                        {
                            this.state.currentPage === 'reviews' ? <ProfileReviews /> : <ProfileSetting stateHandler = {this.stateHandler}/>
                        }
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
