import React, { Component } from 'react'
import SideBarItem from './SideBarItem'
import mockData from '../../data/data'
import { connect } from 'react-redux'
import { fetchWalks } from './actions/allWalks'

class SideBar extends Component {
  // state = { mockData }
  state = {
    arr: mockData
  }
  componentDidMount () {
    this.props.dispatch(fetchWalks())
      .then(res => {
        console.log(res)
      //   this.setState({
      //     arr: res })
      })
  }

  render () {
    return (
      <div>
        {this.state.arr.map((walk) => {
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
