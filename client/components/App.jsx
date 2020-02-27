import React, { Component } from 'react'
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
        {this.state.activePage === 'landingPage' ? <LandingPage />
          : <>

          <div className="sideBarContainer">
            <SideBar />
          </div>
          <div className="mapContainer">
            {this.state.activePage === 'map' && <DisplayMap />}
          </div>
            {this.state.activePage === 'details' && <Details />}

          </>
        }

      </div>
    )
  }
}
export default App
