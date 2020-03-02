import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'
import selectedWalk from './actions/selectedWalk'
import { getReviewRatings } from './actions/allWalks'

class SideBarItem extends Component {
  render () {
    const walk = this.props.walk
    const { id, title, mainPhoto } = walk
    const { activePageState, selectedWalkState } = this.props
    const { selectedWalk, activePage } = this.props
    const walkRatings = this.props.ratings
    const walkId = this.props.walk.id
    const filterByWalk = walkRatings.filter(walk => walk.id === walkId)
    const walkAverage = filterByWalk.reduce((total, next) => total + next.rating, 0) / filterByWalk.length
  
    const style = {
      backgroundImage: `url(${mainPhoto})`
    }

    return (
      <div>
        <div style={style}
          className={
            `${selectedWalkState.id === id ? 'selected-walk' : 'sidebar-item'}`
          }
          onClick={() => {
            selectedWalk(walk)
          }}
        >
          <h2 data-testid={'sideBarItem'}> {title} </h2>
          <p data-testid={'rating'}>rating: {walkAverage}</p>
          { selectedWalkState.id === id &&
        <>

        {activePageState === 'details' &&
        <button onClick={() => activePage('map')}>Show Map</button>}
        {activePageState === 'map' &&
        <button data-testid="showmapbutton" onClick={() => activePage('details') }>Show Details</button>}

        </>
          }

        </div>
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

const mapStateToProps = state => {
  return {
    selectedWalkState: state.selectedWalk,
    activePageState: state.activePage,
    ratings: state.ratings,
    allWalksState: state.allWalks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarItem)
