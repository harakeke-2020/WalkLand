import React, { Component } from 'react'
import { connect } from 'react-redux'
import { justLogin } from './actions/authActions'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.justLogin(this.state)
      .then(this.props.closePopup)
      .catch(err => console.log(err.message))
  }

  render () {
    return (
      <div className='popup'>
        <div className='popup\_inner'>
          <form onSubmit={this.handleSubmit}>
            <button onClick={this.props.closePopup}>Close</button>
            <h1 className='label-white-text'>Login</h1>

            <label className='label-white-text'>Username</label>
            <input
              name='username'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
            /><br/>

            <label className='label-white-text'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
            /><br/>

            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  justLogin: userInfo => dispatch(justLogin(userInfo))
})

export default connect(null, mapDispatchToProps)(Login)
