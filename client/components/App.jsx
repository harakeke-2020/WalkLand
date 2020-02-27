import React, { Component } from 'react'
import { connect } from 'react-redux'
import LandingPage from './LandingPage'
import DisplayMap from './DisplayMap'
import SideBar from './SideBar'
import Details from './Details'

class App extends Component {
  state = {
    activePage: 'landingPage',  
    landingPage: true,
    showMap: true
  }
  render () {
    return (

      <div className="appContainer">
        {this.state.activePage === 'landingPage' && <LandingPage />}
        {this.state.activePage === 'map' && 
        <>
        <div className="sideBarContainer">
            <SideBar />
        </div>
        <div className="mapContainer">
          {this.state.activePage === 'map' && <DisplayMap />}
        </div>
        </> }
        {this.state.activePage === 'details' && 
        <>
        <div className="sideBarContainer">
        <SideBar />
        </div>
        <Details />
        </>}
      

      </div>
    )
  }
}
export default App
