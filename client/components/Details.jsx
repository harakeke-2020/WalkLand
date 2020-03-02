import React, { Component } from 'react'
import { connect } from 'react-redux'

class Details extends Component {
  render () {
    const { selectedWalk } = this.props

    const { ratings } = this.props
    const idWalk = selectedWalk.id
    const reviewsArray = ratings.filter(rating => rating.walkId === idWalk).map(data => {
      return {
        rating: data.rating,
        review: data.review,
        author: 'to be added'
      }
    })

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
          <li>{`Distance: ${selectedWalk.distance}`}</li>
          <li>{`Elevation Gain: ${selectedWalk.elevationGain}`}</li>
          <li>{`Estimated Time: ${selectedWalk.timeTaken}`}</li>
          <li>{`Difficulty: ${selectedWalk.difficulty}`}</li>
          <ul>
            {reviewsArray.map((item, idx) => (
              <>
              <li key={idx}>
                <span>Rating: {item.rating}</span>
                <span>Review: {item.review}</span>
                <span>Author: {item.author}</span>
              </li>
              </>
            ))}
          </ul>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedWalk: state.selectedWalk,
    ratings: state.ratings,
    username: state.auth
  }
}

export default connect(mapStateToProps)(Details)
