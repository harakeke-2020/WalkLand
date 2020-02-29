import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import { connect } from 'react-redux'


export const SearchBar = (props) => {
    console.log(props)
   return (
   <div>
   <form>
         <input type="text" placeholder="Search" />
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
  
