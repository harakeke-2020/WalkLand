import React from 'react'
import { connect } from 'react-redux'
import RegisterUser from './RegisterUser'
import Logout from './Logout'
import LoginUser from './LoginUser'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showRegisterPopup: false,
      showLoginPopup: false
    }
  }

  registerClickHandler = () => {
    this.setState({
      showRegisterPopup: !this.state.showRegisterPopup,
      showLoginPopup: false
    })
  }

  loginClickHandler = () => {
    this.setState({
      showLoginPopup: !this.state.showLoginPopup,
      showRegisterPopup: false
    })
  }

  render () {
    return (
      <>
      {this.props.login
        ? <div className="logged-in">
          <button className="nav-bar-buttons">Profile</button>
          <p className="label-white-text x-y-centre">Welcome<br />{this.props.login}</p>
          <Logout />
        </div>

        : <div className="not-logged-in">
        <div></div>
        <button className="nav-bar-buttons" onClick={this.loginClickHandler}>Login</button>
          <button className="nav-bar-buttons" onClick={this.registerClickHandler}>Register</button>
        </div>
      }

      {this.state.showRegisterPopup
        ? <RegisterUser
          closePopup={this.registerClickHandler} />
        : null
      }

      {this.state.showLoginPopup
        ? <LoginUser
          closePopup={this.loginClickHandler} />
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
