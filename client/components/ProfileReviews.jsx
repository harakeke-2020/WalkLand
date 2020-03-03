import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileReviews extends Component {

    render() {
        // let reviewsArr = []
        return (
            <>
            test
                <div className="profile-bottom-children" >
                {this.props.ratings.map(ratingInfo => {
                    if (ratingInfo.username === this.props.currentUsername) {                        
                        <>
                        <div>{ratingInfo.review}</div>
                        </>
                    }
                })}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        ratings: state.ratings,
        currentUsername: state.auth
    }
}

export default connect(mapStateToProps)(ProfileReviews)
