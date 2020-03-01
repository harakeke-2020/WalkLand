import React from 'react'
import { connect } from 'react-redux'
import loginState from './actions/loginState'
import RegisterUser from './RegisterUser'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showPopup: false
    }
  }
  // loginTrue = () => {
  //   this.props.loginState(true)
  // }

  // loginFalse = () => {
  //   this.props.loginState(false)
  // }

  clickHandler = () => {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render () {
    return (
      <>
      {this.props.login
        ? <div className="logged-in">
          <button className="nav-bar-buttons profile-button">Profile</button>
          <p className="label-white-text">Welcome, {this.props.login}</p>
          <button className="nav-bar-buttons">Logout</button>
        </div>

        : <div className="not-logged-in">
          <button className="nav-bar-buttons">Login</button>
          <button className="nav-bar-buttons" onClick={this.clickHandler}>Register</button>
        </div>
      }

      {this.state.showPopup
        ? <RegisterUser
          closePopup={this.clickHandler} />
        : null
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
