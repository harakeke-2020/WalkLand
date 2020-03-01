import React from 'react'
import { connect } from 'react-redux'
import RegisterUser from './RegisterUser'
import Logout from './Logout'
import LoginUser from './LoginUser'

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
          <Logout />
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


const mapStateToProps = state => {
  return {
    login: state.auth
  }
}

export default connect(mapStateToProps)(NavBar)
