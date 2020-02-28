import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'
import selectedWalk from './actions/selectedWalk'

class SideBarItem extends Component {
  render () {
    const walk = this.props.walk
    const { id, title, mainPhoto, rating } = walk
    const { activePageState, selectedWalkState } = this.props
    const { selectedWalk, activePage } = this.props
    const style = { backgroundImage: `url(${mainPhoto})` }

    return (
      <div style={style} className={
        `${selectedWalkState.id === id ? 'highlighted' : 'item'}`
      }
      onClick={() => {
        selectedWalk(walk)
      }}
      >
        <h2>{title}</h2>
        <p>rating:  {rating}</p>
        { selectedWalkState.id === id &&
        <>
        {activePageState === 'details' &&
        <button onClick={() => activePage('map')}>Show Map</button>}
        {activePageState === 'map' &&
        <button onClick={() => activePage('details') }>Show Details</button>}
        </>
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
    activePageState: state.activePage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarItem)
