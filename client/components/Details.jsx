import React, { Component } from 'react'
import { connect } from 'react-redux'

let slideIndex = 1

class Details extends Component {
  showSlides (n) {
    let i = 0
    const slides = document.getElementsByClassName('mySlides')
    const dots = document.getElementsByClassName('dot')
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
  }

  componentDidMount () {
    this.showSlides(slideIndex)
  }

  // Next/previous controls
  plusSlides (n) {
    this.showSlides(slideIndex += n)
  }

  // Thumbnail image controls
  currentSlide (n) {
    this.showSlides(slideIndex = n)
  }

  render () {
    const { selectedWalk } = this.props
    return (
      <div>
        <h3>{selectedWalk.title}</h3>
        <h5>{selectedWalk.location}</h5>
        <div className="slideshow-container>">
          {
            selectedWalk.photos.map((item, idx, arr) => (
              <div className="mySlides fade" key={idx} >
                <div className="numberText">{idx + 1}/{arr.length}</div>
                <img src={item} width="500px" />
                <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>  
              </div>
            ))
          }

        </div>
        <br></br>
        <div style={{ textAlign: 'center' }}>
          <span className="dot" onClick={() => this.currentSlide(1)}></span>
          <span className="dot" onClick={() => this.currentSlide(2)}></span>
          <span className="dot" onClick={() => this.currentSlide(3)}></span>
        </div>
        <img src={selectedWalk.routeImage} height="200" width="300" />
        <ul>
          <li>Distance: {selectedWalk.distance}km</li>
          <li>Elevation Gain: {selectedWalk.elevationGain}m</li>
          <li>Estimated Time: {selectedWalk.timeTaken}</li>
          <li>Difficulty rating: {selectedWalk.difficulty}</li>
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
