import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileReviews extends Component {
  render() {
    let reviewsArr = []

    let reviews = this.props.ratings.map(ratingInfo => {
      if (ratingInfo.username === this.props.currentUsername && !this.props.otherUsername.isViewing) {
        reviewsArr.push(<div>{ratingInfo.review}</div>)
        reviewsArr.push(<div>{ratingInfo.rating} COOKIES!!</div>)

        // return <div>{ratingInfo.review}</div>
      } else if (ratingInfo.username === this.props.otherUsername.username && this.props.otherUsername.isViewing) {
        reviewsArr.push(<div>{ratingInfo.review}</div>)
        reviewsArr.push(<div>{ratingInfo.rating} COOKIES!!</div>)
        // return <div>{ratingInfo.review}</div>
      }
    })

    return (
      <>
        <div className="profile-bot-container-left">
          <div className="profile-bot-content-card">
            My review: {reviewsArr[0]} <br/>
            My rating: {reviewsArr[1]}
          </div>
        </div>

        <div className="profile-bot-container-mid">
          <div className="profile-card-top"></div>
          <div className="profile-card-bot">
            My review: {reviewsArr[2]} <br/>
            My rating: {reviewsArr[3]}
          </div>
        </div>

        <div className="profile-bot-container-right">
          <div className="profile-bot-content-card">
            {reviewsArr[4]}
            {reviewsArr[5]}
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
    otherUsername: state.viewProfile
  }
}

export default connect(mapStateToProps)(ProfileReviews)
