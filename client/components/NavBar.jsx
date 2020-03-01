import React from 'react'
import { connect } from 'react-redux'
import loginState from './actions/loginState'
class NavBar extends React.Component {
  // loginTrue = () => {
  //   this.props.loginState(true)
  // }

  // loginFalse = () => {
  //   this.props.loginState(false)
  // }

  render () {
    return (
      <>
      {this.props.login
        ? <div className="logged-in">
          <button className="nav-bar-buttons profile-button">Profile</button>
          <button className="nav-bar-buttons" onClick={() => this.setState.login('')}>Logout</button>
        </div>

        : <div className="not-logged-in">
          <button className="nav-bar-buttons">Login</button>
          <button className="nav-bar-buttons">Register</button>
        </div>
      }

        {/* <NavBarLogin />

        <NavBarRegister /> */}

      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginState: (trueOrFalse) => dispatch(loginState(trueOrFalse))
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.loginState,
    login: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
