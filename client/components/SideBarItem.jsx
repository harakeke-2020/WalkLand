import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'
import selectedWalk from './actions/selectedWalk'

class SideBarItem extends Component {
  render () {
    const { id, title, mainPhoto, rating } = this.props.walk
    // const containerStyle = {
    //   backgroundImage: `url(${mainPhoto})`,
    //   height:
    //     this.props.selectedWalk.id === id
    //       ? '600px'
    //       : '200px'
    const style = {
      backgroundImage: `url(${mainPhoto})`
    }
    // }
    return (
      <div style={style} onClick={() => {
        this.props.selectedWalk(this.props.walk)
      }
      }
      className={`${this.props.selectedWalkState.id === id && 'highlighted'}`}>
        <h2>{title}</h2>
        <p>rating:  {rating}</p>
        { this.props.selectedWalk.id === id &&
        <div>
          { this.props.activePage === 'details' &&
        <button onClick={() => this.props.activePage('details')}>
        Show Details
        </button>}
          {this.props.activePage === 'map' &&
        <button onClick={() => this.props.activePage('map') }>
          Show Map
        </button>}
        </div>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activePage: (destination) => dispatch(activePage(destination)),
    selectedWalk: (walk) => dispatch(selectedWalk(walk))
  }
}

const mapStateToProps = (state) => {
  return {
    selectedWalkState: state.selectedWalk,
    activePage: state.activePage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarItem)
