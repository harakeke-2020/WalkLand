import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from './actions/reviewWalks'
import { create } from 'react-test-renderer'

class Details extends Component {
  state = {
    username: this.props.login,
    rating: '',
    review: '',
    walkId: this.props.selectedWalk.id
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createReview(this.state)
    .then(thing => console.log('this state: ', thing))
      .catch(err => console.log(err))
  }

  render () {
    const { selectedWalk } = this.props

    const { ratings } = this.props
    const idWalk = selectedWalk.id
    const rating = ratings.filter(rating => rating.walkId === idWalk).map(data => data.rating)
      
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
            <input type='hidden' value={this.props.selectedWalk.id} name="walkId" />
            <input type='hidden' value={this.props.login} name="username" />

            <button type='submit'>Submit Review</button>
          </form>
        </div>
        }

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

const mapStateToProps = state => {
  return {
    selectedWalk: state.selectedWalk,
    login: state.auth,
    ratings: state.ratings
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
