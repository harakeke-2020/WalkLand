import React, { Component } from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'
import selectedWalk from './actions/selectedWalk'
import { getReviewRatings } from './actions/allWalks'

export const SideBarItem = (props) => {
    const walk = props.walk
    const { id, title, mainPhoto } = walk
    const { activePageState, selectedWalkState } = props
    const { selectedWalk, activePage } = props
    const walkRatings = props.ratings // array of ratings
    const walkId = props.walk.id // id of walk passed down
    const filterByWalk = walkRatings.filter(walk => walk.walkId === walkId)
    const walkAverage = filterByWalk.reduce((total, next) => total + Number(next.rating), 0) / filterByWalk.length

    const style = {
      backgroundImage: `url(${mainPhoto})`
    }

    return (
      <div>
        <div data-testid={'style'} style={style}
          className={
            `${selectedWalkState.id === id ? 'selected-walk' : 'sidebar-item'}`
          }
          onClick={() => {
            selectedWalk(walk)
          }}
        >
          <h2 data-testid={'sideBarTitle'}> {title} </h2>
          {walkAverage ? <p data-testid={'rating'}>rating: {Math.round((walkAverage + Number.EPSILON) * 100) / 100}</p> : <p>No rating yet</p>}
          { selectedWalkState.id === id &&
        <>

        {activePageState === 'details' &&
        <button data-testid='showMap' name = 'showMap' onClick={() => activePage('map')}>Show Map</button>}
        {activePageState === 'map' &&
        <button data-testid="showDetails" name = 'showDetials' onClick={() => activePage('details') }>Show Details</button>}
        </>
          }

        </div>
      </div>
    )
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
