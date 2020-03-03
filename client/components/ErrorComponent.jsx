import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setError } from './actions/setError'

class ErrorComponent extends Component {
  render () {
    return (
      <div className="popup">
        <button className='button-round' onClick={() => this.props.setError('')}>x</button>
        <div className='popup_inner'>
          {this.props.errorState}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorState: state.errorState
  }
}

const mapDispatchToProps = dispatch => ({
  setError: errorState => dispatch(setError(errorState))
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent)
