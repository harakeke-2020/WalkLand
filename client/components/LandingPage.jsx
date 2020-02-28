import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'

export const Landing = (props) => {
  return (
    <>

    <div data-testid='fullscreen' className="fullscreen-bg">
      <video autoPlay loop id="myVideo" className="fullscreen-bg__video">
        <source data-testid = 'video' src='landingvideo1.mp4' type="video/mp4" />
      </video>

    </div>
      <div>
        <h1 data-testid = 'title' className="landing-heading-centre">Walkland</h1>
      </div>
      <div className="btn-group-wrap">
        <div className="div.btn-group">
          <button data-testid = "startButton" className="w3-animate-zoom btneffect btn" onClick={() => props.activePage('map')}>Take a Walk</button>
        </div>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  activePage
}

export default connect(null, mapDispatchToProps)(Landing)
