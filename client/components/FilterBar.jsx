import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import { connect } from 'react-redux'

export const FilterBar = (props) => {

function myFunction (){
  document.getElementById("myDropdown").classList.toggle("show")
}

function sortByRating (){
  const walks = props.allWalks
  console.log(walks)
}

console.log(props)

  return (
    <div className="dropdown">
    <button onClick={myFunction} className="dropbtn">Filter</button>
    <div id="myDropdown" className="dropdown-content"> 
      <a onClick={sortByRating} > rating</a>
      <a href="#test1">test1</a>
      <a href="#test2">test2</a>
    </div>
  </div>
  )
}


const mapStateToProps = (state) => {
  return {
    allWalks: state.allWalks
  }
}

export default connect(mapStateToProps)(FilterBar)
