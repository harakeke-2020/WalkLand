import React, { Component } from 'react'
import { connect } from 'react-redux'

class Details extends Component {
  render () {
    const { selectedWalk } = this.props
    return (
      <div>
        <h3>{selectedWalk.title}</h3>
        <h5>{selectedWalk.location}</h5>
        <ul>
          {
            selectedWalk.photos.map((item, idx) => (<img key={idx} src={item} height="200" width="300" />))
          }
        </ul>
        <img src={selectedWalk.routeImage} height="200" width="300" />
        <ul>
          <li>{`Distance: ${selectedWalk.info.distance}km`}</li>
          <li>{`Elevation Gain: ${selectedWalk.info.elevationGain}m`}</li>
          <li>{`Estimated Time: ${selectedWalk.info.timeTaken}`}</li>
          <li>{`Difficulty rating: ${selectedWalk.info.difficulty}`}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedWalk: state.selectedWalk
  }
}

export default connect(mapStateToProps)(Details)
