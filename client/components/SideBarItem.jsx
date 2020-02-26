import React, { Component } from 'react'

class SideBarItem extends Component {
  render () {
    const { title, mainPhoto, rating } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <img url={mainPhoto}></img>
        <p>{rating}</p>
      </div>
    )
  }
}

export default SideBarItem
