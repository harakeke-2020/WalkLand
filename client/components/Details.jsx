import React, { Component } from 'react'
import { connect } from 'react-redux'

class Details extends Component {
  state = {
    rating: '',
    review: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('handle submit')
  }

  render () {
    const { selectedWalk } = this.props

    const { ratings } = this.props
    const idWalk = selectedWalk.id
    const rating = ratings.filter(rating => rating.walkId === idWalk)
      .map(data => data.rating)

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
          <li>{`Ratings: ${rating}`}</li>
        </ul>

        {this.props.login &&
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Submit your experience!</h1>
            <p>Be a part of the experience</p>
            <label>Rating</label>
            <input
              name='rating'
              placeholder='Rating'
              value={this.state.rating}
              onChange={this.handleChange}
            /><br/>

            <label>Review</label>
            <input
              type='text'
              name='review'
              placeholder='Review'
              value={this.state.review}
              onChange={this.handleChange}
            /><br/>

            <button type='submit'>Submit Review</button>
          </form>
        </div>
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedWalk: state.selectedWalk,
    login: state.auth,
    ratings: state.ratings
  }
}

export default connect(mapStateToProps)(Details)
