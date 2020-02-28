import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'

export const Landing = (props) => {
  return (
    <>
      <div>
        <h1 data-testid = "title" >Walkland</h1>
      </div>

      <div>
        <button data-testid = "startButton" onClick={() => props.activePage('map')}>Click me</button>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  activePage
}

export default connect(null, mapDispatchToProps)(Landing)
