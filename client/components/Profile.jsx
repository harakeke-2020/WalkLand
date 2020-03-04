import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfileInfo } from './actions/userProfiles'

import activePage from './actions/activePage'
import ProfileSetting from './ProfileSetting'
import ProfileReviews from './ProfileReviews'
import ProfileBanner from './ProfileBanner'

class Profile extends Component {
  state = {
    currentPage: 'reviews'
  }

  componentDidMount = () => {
    this.props.fetchProfileInfo(this.props.outsideUser.username)
  }
  stateHandler = () => {
    this.setState({
      currentPage: 'map'
    })
  }

  compareHandler = () => {
    return this.props.username === this.props.outsideUser.username
  }

  render () {
    return (
      <>
        {this.props.userProfiles === 'error' ? <a className="alert alert-danger hamish-profile-deleted" href="/#/" onClick={() => this.props.activePage('details')}>Profile not found. Click to go back.</a>
          : <div className="profile-container">
            <div className="profile-header">
              <img className='profile-logo' src='images/mainlogo.png' />
              <div className="profile-header-btn-group">
                <button name = "home" className="profile-header-btn" onClick={() => this.props.activePage('map')}>Home</button>
                {this.compareHandler() ? <button name = "settings" className="profile-header-btn" onClick={() => this.setState({ currentPage: 'settings' })}>Settings</button> : null}
                <button name = "reviews" className="profile-header-btn" onClick={() => this.setState({ currentPage: 'reviews' })}>Reviews</button>
              </div>
            </div>

            <div className="profile-top">Home
              <div className="profile-top-children">
                {this.props.outsideUser.isViewing ? <ProfileBanner user={this.props.outsideUser.username} welcome={`You are viewing ${this.props.outsideUser.username}'s profile`} /> : <ProfileBanner user={this.props.username} welcome={`Welcome, ${this.props.username}!`} />}
              </div>
            </div>

            <div className="profile-cover">
            </div>

            <div className="profile-bottom">

              <div className="profile-bottom-children">
                {this.compareHandler() && this.state.currentPage === 'settings' ? <ProfileSetting showButton="true" stateHandler={() => this.stateHandler} /> : <ProfileSetting showButton="false" />}
                {this.state.currentPage === 'reviews' ? <ProfileReviews /> : null}
              </div>

            </div>
          </div>
        }
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activePage: (destination) => dispatch(activePage(destination)),
    fetchProfileInfo: (user) => dispatch(fetchProfileInfo(user))
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth,
    outsideUser: state.viewProfile,
    userProfiles: state.userProfiles
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

