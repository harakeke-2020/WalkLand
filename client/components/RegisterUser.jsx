import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUserAndLogin } from './actions/authActions'

class RegisterUser extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.registerUserAndLogin(this.state)
    .catch(err => console.log(err))
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>

        <label>Username: </label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
        /><br/>

        <label>Email: </label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleChange}
        /><br/>

        <label>Password: </label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  registerUserAndLogin: userInfo => dispatch(registerUserAndLogin(userInfo))
})

export default connect(null, mapDispatchToProps)(RegisterUser)
