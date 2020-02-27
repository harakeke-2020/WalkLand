import React, { Component } from 'react'
import { connect } from 'react-redux'

import { activePage } from './actions/activePage'

class SideBarItem extends Component {
  render () {
    const { title, mainPhoto, rating } = this.props
    const containerStyle = {
      backgroundImage: `url(${mainPhoto})`
    }
    return (
      <div className="sideBarItem" style={containerStyle}
        onClick={() => this.props.activePage('details') }>
        <h2>{title}</h2>
        <p>rating:  {rating}</p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activePage: (destination) => {
      const action = activePage(destination)
      dispatch(action)
    }
  }
}

// const mapDispatchToProps = {
//   activePage
// }

export default connect(null, mapDispatchToProps)(SideBarItem)
