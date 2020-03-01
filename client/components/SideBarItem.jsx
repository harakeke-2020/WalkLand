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
    const style = {
      backgroundImage: `url(${mainPhoto})`
    }

    /* on component did mount we need to have all walks connecting to the walkId so they
can display a rating. We do not select an indivual walk on load so it needs to know
about all Id's on load so it can filter then map through and display the ratings on the right walk */
    const { ratings, allWalksState } = this.props
    const allWalks = allWalksState.map(allWalk => allWalk.id)
    const rating = ratings.map(match => match.rating).filter(rating => rating.walkId === allWalks)

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
          <p data-testid={'rating'}>rating</p>
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
