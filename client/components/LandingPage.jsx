import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activePage } from './actions/activePage'

const Landing = (props) => {
  return (
    <>
      <div>
        <h1>Walkland</h1>
      </div>

      <div>
        <button onClick={() => props.activePage('map')}>Click me</button>
      </div>
    </>
  )
}

const mapDispatchToProps = {
  activePage
}

export default connect(null, mapDispatchToProps)(Landing)
