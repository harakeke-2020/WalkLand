import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import { connect } from 'react-redux'
import allWalks from './actions/activePage'

export const SideBar = (props) => {

  return (
    <div>
      {props.allWalks.map((walk) => {
        return (
          <SideBarItem key={walk.id} walk={walk} mainPhoto={walk.mainPhoto}/>
        )
      })}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    allWalks: state.allWalks

  }
}

export default connect(mapStateToProps)(SideBar)
