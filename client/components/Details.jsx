import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Details extends Component {
  render () {
    const { selectedWalk } = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    const texty = "I saw the way the woman walked, shoulders back, yet eyes frequently checking her own appearance; it was as if she felt superior and insecure all at once, perhaps that's the emotional optimum in a shallow society. I prefer the way our Maya is, she swaggers, a sort of free-style motion that says she's real happy with who she is, eyes on the sky, the trees and the birds, music in her soul as much as her ears."
    return (
      <div className="details-container">
        <h1 className = "details-walktitle">{selectedWalk.title}</h1>
        <div className = "details-photo-slider">
          <Slider {...settings} >
            {
              selectedWalk.photos.map((item, idx) => (
                <img className = "details-photos" key={idx} src={item} />
              ))
            }
          </Slider >
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedWalk: state.selectedWalk,
    ratings: state.ratings
  }
}

export default connect(mapStateToProps)(Details)
