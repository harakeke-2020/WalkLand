import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileReviews extends Component {
  
  render() {
    let reviewsArr = []
    let reviews = this.props.ratings.map(ratingInfo => {
      if (ratingInfo.username === this.props.currentUsername && !this.props.otherUsername.isViewing) {
        reviewsArr.push(<div>{ratingInfo.walkId}</div>)
        reviewsArr.push(<div>{ratingInfo.review}</div>)
        reviewsArr.push(<div>{ratingInfo.rating} COOKIES!!</div>)
        
        // return <div>{ratingInfo.review}</div>
      } else if (ratingInfo.username === this.props.otherUsername.username && this.props.otherUsername.isViewing) {
        reviewsArr.push(<div>{ratingInfo.walkId}</div>)
        reviewsArr.push(<div>{ratingInfo.review}</div>)
        reviewsArr.push(<div>{ratingInfo.rating} COOKIES!!</div>)
        // return <div>{ratingInfo.review}</div>
      }
    })
    
    return (
      <>
      {console.log('reviewsArr: ', reviewsArr)}
      <div className="profile-bot-container-left">
      <div className="profile-bot-content-card">
      Walk name: {reviewsArr[0] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[0].props.children).title} <br/>
      My review: {reviewsArr[1]} <br/>
      My rating: {reviewsArr[2]}
      Image of Walk: <img src={reviewsArr[0] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[0].props.children).mainPhoto} /><br/>

      </div>
      </div>
      
      <div className="profile-bot-container-mid">
      <div className="profile-bot-content-card">
      Walk name: {reviewsArr[3]=== undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[3].props.children).title} <br/>
      My review: {reviewsArr[4]} <br/>
      My rating: {reviewsArr[5]}
      Image of Walk: <img src={reviewsArr[3] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[3].props.children).mainPhoto} /><br/>
      </div>
      </div>
      
      <div className="profile-bot-container-right">
      <div className="profile-bot-content-card">
      Walk name: {reviewsArr[6] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[6].props.children).title} <br/>
      My review: {reviewsArr[7]} <br/>
      My rating: {reviewsArr[8]}
      Image of Walk: <img src={reviewsArr[6] === undefined ? '' : this.props.allWalks.find(walk => walk.id === reviewsArr[6].props.children).mainPhoto} /><br/>
      </div>
      </div>
      </>
      )
    }
  }

  const mapStateToProps = state => {
    return {
      ratings: state.ratings,
      currentUsername: state.auth,
      otherUsername: state.viewProfile,
      userId: state.userProfiles,
      allWalks: state.allWalks
    }
  }

export default connect(mapStateToProps)(ProfileReviews)
