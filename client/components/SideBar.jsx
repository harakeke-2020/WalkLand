import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import { connect } from 'react-redux'

class SideBar extends Component {
  render () {
    return (
      <div>
        {this.props.allWalks.map((walk) => {
          return (
            <SideBarItem key={walk.id} walk={walk} mainPhoto={walk.mainPhoto}/>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedWalkState: state.selectedWalk,
    allWalks: state.allWalks
  }
}

export default connect(mapStateToProps)(SideBar)
