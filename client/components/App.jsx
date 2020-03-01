import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWalks } from './actions/allWalks'

import LandingPage from './LandingPage'
import DisplayMap from './DisplayMap'
import SideBar from './SideBar'
import Details from './Details'
import LogoComponent from './LogoComponent'
import NavBar from './NavBar'
import RegisterUser from './RegisterUser'
import LoginUser from './LoginUser'
import Logout from './Logout'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(fetchWalks())
  }

  render () {
    return (
      <>
        {this.props.activePage === 'landingPage' &&
          <div className="landing-page-container">
            <LandingPage />
          </div>
        }
        <RegisterUser />
        <LoginUser />
        <Logout />
        {this.props.activePage === 'map' &&
          <div className="map-page-container">
            <div className="logo-nav-container">
              <LogoComponent />
              <NavBar />
            </div>
            <div className="side-bar-container">
              <SideBar />
            </div>
            <div className="map-container">
              <DisplayMap />
            </div>
          </div>
        }

        {this.props.activePage === 'details' &&
          <div className="details-page-container">
            <div className="logo-nav-container">
              <LogoComponent />
              <NavBar />
            </div>
            <div className="side-bar-container">
              <SideBar />
            </div>
            <div className="map-container">
              <Details />
            </div>
          </div>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    activePage: state.activePage
  }
}

export default connect(mapStateToProps)(App)
