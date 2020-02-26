import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export class DisplayMap extends Component {
  render () {
    const mapStyles = {
      width: '100%',
      height: '100%'
    }
    return (
      <div>
        <div className="mapContainer">
          <Map
            google={this.props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={{ lat: -36.848461, lng: 174.763336 }}>
          </Map>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAnz2zXo94BzcNmXJucAXslMthhqQ52OlU'
})(DisplayMap)
