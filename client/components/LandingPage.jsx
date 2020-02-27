import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'

const Landing = (props) => {
  return (
    <>
<<<<<<< HEAD
      <div className>
        <h1>Walkland</h1>
      </div>

      <div className>
        <button onClick={() => props.activePage(activePage('map'))}>Click me</button>
=======
      <div>
        <h1>Walkland</h1>
      </div>

      <div>
        <button onClick={() => props.activePage('map')}>Click me</button>
>>>>>>> f9feb1e4161eb531500234bd69b4d088e344b110
      </div>
    </>
  )
}

const mapDispatchToProps = {
  activePage
}

export default connect(null, mapDispatchToProps)(Landing)
