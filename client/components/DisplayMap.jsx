import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export class DisplayMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      walks: [
        { latitude: -36.854520, longitude: 174.772353 },
        { latitude: -36.829306, longitude: 174.746528 },
        { latitude: -36.848461, longitude: 174.763336 }

      ]
    }
  }

  displayMarkers = () => {
    return this.state.walks.map((walk, index, mark, props) => {
      return <Marker key={index} id={index} position={{
        lat: walk.latitude,
        lng: walk.longitude
      }}

      onClick={() => console.log(index)}
      className="markerLayer" />
    })
  }

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
            {this.displayMarkers()}
          </Map>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAnz2zXo94BzcNmXJucAXslMthhqQ52OlU'
})(DisplayMap)
