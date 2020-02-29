import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, mapStyles } from 'google-maps-react'
import { connect } from 'react-redux'
import selectedWalk from './actions/selectedWalk'

class DisplayMap extends Component {
  bounceMarker = () => {
    return <Marker key={this.props.selectedWalkState.id} id={this.props.selectedWalkState.id} position={{
      lat: this.props.selectedWalkState.latitude,
      lng: this.props.selectedWalkState.longitude
    }}
    animation={window.google.maps.Animation.BOUNCE}
    onClick={() => { this.props.selectedWalk(this.props.selectedWalkState) }}
    />
  }
  initialMarkers = () => {
    const { allWalksState } = this.props
    return allWalksState.map(walk => {
      return <Marker key={walk.id} id={walk.id} position={{
        lat: walk.latitude,
        lng: walk.longitude
      }}
      opacity={ this.props.selectedWalkState.id === undefined ? 1 : 0.3 }
      visible={ walk.id === this.props.selectedWalkState.id ? false : true }
      animation={ this.props.selectedWalkState.id === undefined ? 2 : 0}
      onClick={() => { this.props.selectedWalk(walk) }}
      />
    })
  }

  render () {
    return (
      <div>
        <div className="mapContainer" >
          <Map
            google={this.props.google}
            zoom={11}
            style={mapStyles}
            initialCenter={{ lat: -36.848461, lng: 174.763336 }}
          >
            {this.initialMarkers()}
            
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
    allWalksState: state.allWalks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyAnz2zXo94BzcNmXJucAXslMthhqQ52OlU'
})(DisplayMap))
