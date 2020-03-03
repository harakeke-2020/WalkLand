import React, { Component } from 'react'
import { connect } from 'react-redux'

class ErrorComponent extends Component {
  render() {
    return (
      <div>
        {this.props.errorState}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorState: state.errorState
  }
}

export default connect(mapStateToProps)(ErrorComponent)
