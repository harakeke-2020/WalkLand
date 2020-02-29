import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { connect } from 'react-redux'
import selectedWalk from './actions/selectedWalk'

class DisplayMap extends Component {
  bounceMarker = () => {
    console.log('from bouncemarker', this.props.selectedWalkState)
    return <Marker key={this.props.selectedWalkState.id} id={this.props.selectedWalkState.id} position={{
      lat: this.props.selectedWalkState.latitude,
      lng: this.props.selectedWalkState.longitude
    }}
    animation={window.google.maps.Animation.BOUNCE}
    onClick={() => { this.props.selectedWalk(this.props.selectedWalkState) }}
    />
  }
  initialMarkers = () => {
    const { allWalks } = this.props
    const { allWalksState } = this.props
    return allWalksState.map(walk => {
      return <Marker key={walk.id} id={walk.id} position={{
        lat: walk.latitude,
        lng: walk.longitude
      }}
      animation={window.google.maps.Animation.DROP}
      onClick={() => { this.props.selectedWalk(walk, allWalks) }}
      />
    })
  }

    unselectedMarkers = () => {
      // state.filter((item) => item.id !== action.selectedWalk.id)
      // const { unselected } = this.props
      // const { allWalksState, selectedWalkState } = this.props
      // console.log('from unselected markers function ', this.props)
      const { allWalks } = this.props
      return this.props.allWalksState.map(walk => {
        walk.id !== this.props.selectedWalkState.id &&
        return <Marker key={walk.id} id={walk.id} position={{
          lat: walk.latitude,
          lng: walk.longitude
        }}
        onClick={() => { this.props.selectedWalk(walk, allWalks) }}
        />
      }
      )
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
              {/* {console.log('markers', this.bounceMarker())} */}
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
    // unselected: state.unselectedWalks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyAnz2zXo94BzcNmXJucAXslMthhqQ52OlU'
})(DisplayMap))
