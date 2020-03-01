import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import { connect } from 'react-redux'
import FilterBar from './FilterBar'

export const Sidebar = (props) => {


  return (

    <>
      <FilterBar />
      {props.allWalks.map((walk) => {
        return (
          <SideBarItem key={walk.id} walk={walk} mainPhoto={walk.mainPhoto} />
        )
      })}
    </>
  )
}

function mapStateToProps (state) {
  return {
    selectedWalkState: state.selectedWalk,
    allWalks: state.allWalks,

  }
}

export default connect(mapStateToProps)(Sidebar)
