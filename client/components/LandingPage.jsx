import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'

export const Landing = (props) => {
  return (
    <>
<<<<<<< HEAD

    <div data-testid='fullscreen' className="fullscreen-bg">
      <video autoPlay loop id="myVideo" className="fullscreen-bg__video">
        <source data-testid = 'video' src='landingvideo.mp4' type="video/mp4" />
      </video>

    </div>
      <div>
        <h1 data-testid = 'title' className="landing-heading-centre">Walkland</h1>
      </div>
      <div className="btn-group-wrap">
        <div className="div.btn-group">
          <button data-testid = "startButton" className="w3-animate-zoom btneffect btn" onClick={() => props.activePage('map')}>Take a Walk</button>
        </div>
=======
    <div className="fullscreen-bg">
    <video autoPlay muted loop id="myVideo" className="fullscreen-bg__video">
    <source src='landingvideo1.mp4' type="video/mp4" />
    </video>

    </div>
      <h1 className="landing-heading-centre">Walkland</h1>
      <div className="btn-group-wrap">
        <button className="btn" onClick={() => props.activePage('map')}> Walk through Auckland</button>
>>>>>>> c1c9f5f535808c54056ba676694700925d610cc0
      </div>
    </>
  )
}

const mapDispatchToProps = {
  activePage
}

export default connect(null, mapDispatchToProps)(Landing)
