import React, { Component } from 'react'
import { connect } from 'react-redux'
import LandingPage from './LandingPage'
import DisplayMap from './DisplayMap'
import SideBar from './SideBar'
import Details from './Details'
import { fetchWalks } from './actions/allWalks'

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
        {this.props.activePage === 'map' &&
          <div className="map-page-container">
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
