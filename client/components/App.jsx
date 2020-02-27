import React from 'react'
import Landing from './Landing'
import Map from './Map'
import SideBar from './SideBar'
import Details from './Details'

const App = () => {
  state = {
    activePage: 'map',
    landingPage: true,
    showMap: true
  }
  return (
    <div className="app-container">
      {this.state.activePage === 'landingPage' ? <Landing />
        : <div>
          <SideBar />
          {this.state.activePage === 'map' && <Map />}
          {this.state.activePage === 'details' && <Details />}
        </div>
      }

    </div>
  )
}

export default App
