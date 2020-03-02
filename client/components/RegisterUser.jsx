import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUserAndLogin } from './actions/authActions'

class RegisterUser extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.registerUserAndLogin(this.state)
      .then(this.props.closePopup)
  }

  render () {
    return (
      <div className='popup'>
        <div className='popup\_inner'>
          <form onSubmit={this.handleSubmit}>
            <button onClick={this.props.closePopup}>Close</button>
            <h1 className='label-white-text'>Register with us!</h1>

            <label className='label-white-text'>Username: </label>
            <input
              name='username'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
            /><br/>

            <label className='label-white-text'>Email: </label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange}
            /><br/>

            <label className='label-white-text'>Password: </label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
            /><br/>

            <button type='submit'>Register!</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  registerUserAndLogin: userInfo => dispatch(registerUserAndLogin(userInfo))
})

export default connect(null, mapDispatchToProps)(RegisterUser)
