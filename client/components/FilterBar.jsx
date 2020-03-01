import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import { connect } from 'react-redux'

export const SearchBar = (props) => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Filter" />
      </form>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allWalks: state.allWalks
  }
}

export default connect(mapStateToProps)(SearchBar)
