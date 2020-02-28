import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { connect } from 'react-redux'
import selectedWalk from './actions/selectedWalk'

class DisplayMap extends Component {
  bounceMarker = () => {
    const { selectedWalkState } = this.props
    return <Marker key={selectedWalkState.id} id={selectedWalkState.id} position={{
      lat: selectedWalkState.latitude,
      lng: selectedWalkState.longitude
    }}
    animation={window.google.maps.Animation.BOUNCE}
    />
  }
  initialMarkers = () => {
    const { allWalksSate } = this.props
    return allWalksSate.map((walk) => {
      return <Marker key={walk.id} id={walk.id} position={{
        lat: walk.latitude,
        lng: walk.longitude
      }}
      animation={window.google.maps.Animation.DROP}
      onClick={() => { this.props.selectedWalk(walk) }}
      />
    })
  }
  unselectedMarkers = () => {
    const { unselected } = this.props
    return unselected.map((walk) => {
      return <Marker key={walk.id} id={walk.id} position={{
        lat: walk.latitude,
        lng: walk.longitude
      }}
      onClick={() => { this.props.selectedWalk(walk) }}
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
            initialCenter={{ lat: -36.848461, lng: 174.763336 }}
          >
            {this.props.selectedWalkState.id === undefined
              ? this.initialMarkers()
              : this.unselectedMarkers()
            }
            {this.props.selectedWalkState.id !== undefined &&
            this.bounceMarker()
            }
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
    selectedWalkState: state.selectedWalk,
    allWalksSate: state.allWalks,
    unselected: state.unselectedWalks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyAnz2zXo94BzcNmXJucAXslMthhqQ52OlU'
})(DisplayMap))
