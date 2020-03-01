import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReviewRatings } from './actions/allWalks'

class Details extends Component {
  
  componentDidMount () {
    this.props.dispatch(getReviewRatings())
  }


  

  render () {
    const { ratings } = this.props  
    const { selectedWalk } = this.props


    const fish = selectedWalk.id
    const filteredArray = ratings.filter(rating => 
      rating.walkId === fish    
    )
  console.log('this is filteredArray ', filteredArray)




    return (
      <div>
        <h3>{selectedWalk.title}</h3>
        <h5>{selectedWalk.location}</h5>
        <ul>
          {
            selectedWalk.photos.map((item, idx) => (<img key={idx} src={item} height="200" width="300" />))
          }
        </ul>
        <img src={selectedWalk.routeImage} height="200" width="300" />
        <ul>
          <li>{`Distance: ${selectedWalk.distance}`}</li>
          <li>{`Elevation Gain: ${selectedWalk.elevationGain}`}</li>
          <li>{`Estimated Time: ${selectedWalk.timeTaken}`}</li>
          <li>{`Difficulty: ${selectedWalk.difficulty}`}</li>
        <li>{`Ratings: ${ratings.review}`}</li>
          
          
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedWalk: state.selectedWalk,
    ratings: state.ratings
  }
}

export default connect(mapStateToProps)(Details)
