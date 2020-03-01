import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import Slider from "react-slick"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Details extends Component {
  
  render () {
    const { selectedWalk } = this.props

    console.log("hello")
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className="details-container">
        <h1 className = "details-walktitle">{selectedWalk.title}</h1>
        <div className = "details-photo-slider">
          <Slider  {...settings} className = 'details-slider' >
              {
                selectedWalk.photos.map((item, idx) => (
                  <img  className = "details-photos" key={idx} src={item} />
                ))
              }
             </Slider>
        </div>
        <img className = "details-map" src={selectedWalk.routeImage} height="200" width="300" />
        <ul className = "details-info">
          <li>{`Location: ${selectedWalk.location}`}</li>
          <li>{`Distance: ${selectedWalk.distance}km`}</li>
          <li>{`Elevation Gain: ${selectedWalk.elevationGain}m`}</li>
          <li>{`Estimated Time: ${selectedWalk.timeTaken}`}</li>
          <li>{`Difficulty rating: ${selectedWalk.difficulty}`}</li>
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
