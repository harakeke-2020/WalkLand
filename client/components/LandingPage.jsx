import React, { Component } from 'react'

const Landing = (props) => {
  console.log("landing", props)

  function myFunction () {
    console.log("hi")
  }
  return (
    <>
    <div className>
    <h1>Walkland</h1>
    </div>

    <div className>
    <button onClick={myFunction}>Click me</button>
    </div>
    </>
  )
}

export default Landing 

