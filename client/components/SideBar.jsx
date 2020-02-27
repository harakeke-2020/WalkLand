import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import mockData from '../../data/data'
import { connect } from 'react-redux'

class SideBar extends Component {
  state = { mockData } /* this.props.selectedWalkState */

  render () {
    return (
      <div>
        {this.state.mockData.map((walk) => {
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
    selectedWalkState: state.selectedWalk
  }
}

export default connect(mapStateToProps)(SideBar)
