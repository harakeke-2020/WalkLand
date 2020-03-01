import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
    render() {
        return (
            <>
                <div className="profile-container">
                    <div className="profile-header">
                    </div>
                    
                    <div className="profile-picture">
                    </div>
                    
                    <div className="profile-bio">
                    </div>
                    
                    <div className="profile-reviews">
                    </div>
                </div>
            </>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//        
//     }
// }


// const mapDispatchToProps = {
//     activePage
// }

// export default connect(null, mapDispatchToProps)(Profile)
export default (Profile)
