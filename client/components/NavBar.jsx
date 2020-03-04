import React from 'react'
import { connect } from 'react-redux'
import activePage from './actions/activePage'
import RegisterUser from './RegisterUser'
import Logout from './Logout'
import LoginUser from './LoginUser'
import viewProfile from './actions/viewProfile'

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
    console.log('loginClickHandler')
    console.log(this.state)
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
            <button className="nav-bar-buttons" onClick={() => { this.props.activePage('profile'); this.props.viewProfile(this.props.login, false) }}>Profile</button>
            <p className="label-white-text x-y-centre">Welcome<br />{this.props.login}</p>
            <Logout />
          </div>

          : <div className="not-logged-in">
            <div className="login-text">
              <a href="/#/" onClick={this.loginClickHandler}>Login</a>
              <a href="/#/" onClick={this.registerClickHandler}>Register</a>
            </div>
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

      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activePage: (destination) => dispatch(activePage(destination)),
    viewProfile: (username, isViewing) => dispatch(viewProfile(username, isViewing))
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
