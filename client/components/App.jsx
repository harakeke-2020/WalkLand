import React, { Component } from 'react'
import { connect } from 'react-redux'
import LandingPage from './LandingPage'
import DisplayMap from './DisplayMap'
import SideBar from './SideBar'
import Details from './Details'

class App extends Component {
  render () {
    return (
      <div >
        <div data-testid="landing" className="landing-page">
          {this.props.activePage === 'landingPage' && <LandingPage />}
        </div>
        <div data-testid="appContainer" className="appContainer">
          {this.props.activePage === 'map' &&
        <>
        <div data-testid="sidebar" className="sideBarContainer">
          <SideBar />
        </div>
        <div className="mapContainer">
          <DisplayMap />
        </div>
        </> }
          {this.props.activePage === 'details' &&
        <>
        <div className="sideBarContainer">
          <SideBar />
        </div>
        <Details />
        </>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activePage: state.activePage
  }
}

export default connect(mapStateToProps)(App)
