import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from './actions/reviewWalks'
import { create } from 'react-test-renderer'
// import { Carousel } from 'react-responsive-carousel'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0
    }
    const texty = "I saw the way the woman walked, shoulders back, yet eyes frequently checking her own appearance; it was as if she felt superior and insecure all at once, perhaps that's the emotional optimum in a shallow society. I prefer the way our Maya is, she swaggers, a sort of free-style motion that says she's real happy with who she is, eyes on the sky, the trees and the birds, music in her soul as much as her ears."
    return (
      <div className="details-container">
        <h1 className = "details-walktitle">{selectedWalk.title}</h1>
        <div className = "details-photo-slider-div ">
          <Slider {...settings} >
            {
              selectedWalk.photos.map((item, idx) => (
                <img className = "details-photos" key={idx} src={item} />
              ))
            }
          </Slider >
        </div>
        <div className = "details-blackbox">

        </div>
        <div className = "details-text">
          <p> {texty} </p>
        </div>
        <img className = "details-map" src={selectedWalk.routeImage} height="200" width="300" />
        <ul className = "details-info">
          <li>{`Location: ${selectedWalk.location}`}</li>
          <li>{`Distance: ${selectedWalk.distance}km`}</li>
          <li>{`Elevation Gain: ${selectedWalk.elevationGain}m`}</li>
          <li>{`Estimated Time: ${selectedWalk.timeTaken}`}</li>
          <li>{`Difficulty: ${selectedWalk.difficulty}`}</li>
        </ul>

        {/* {this.props.login &&
        <div >
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
        } */}

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
