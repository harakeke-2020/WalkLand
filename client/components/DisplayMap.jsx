import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { connect } from 'react-redux'
import mockData from '../../data/data' //disable once redux functions working
import selectedWalk from './actions/selectedWalk'

class DisplayMap extends Component {
  //if mockData is not array, run a different function which displays the single marker
  displayMarkers = () => {
    // console.log(this.props)
    return mockData.map((walk, mark, props) => {
      return <Marker key={walk.id} id={walk.id} position={{
        lat: walk.latitude,
        lng: walk.longitude
      }}
      animation={window.google.maps.Animation.DROP}

      onClick={() => this.props.selectedWalk(walk)}

      />
    })
  }

  render () {
    const mapStyles = {
      width: '100%',
      height: '100%'
    }
    return (
      <div>
        <div className="mapContainer" >
          <Map
            google={this.props.google}
            zoom={11}
            style={mapStyles}
            initialCenter={{ lat: -36.848461, lng: 174.763336 }}>

            {this.displayMarkers()}

          </Map>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectedWalk: (walk) => dispatch(selectedWalk(walk))
  }
}

const mapStateToProps = (state) => {
  return {
    selectedWalkState: state.selectedWalk
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyAnz2zXo94BzcNmXJucAXslMthhqQ52OlU'
})(DisplayMap))
