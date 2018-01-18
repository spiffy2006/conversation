import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FormInput extends Component {
  render () {
    return (
      <div>
        <p>{this.props.text}</p>,
        <textarea onChange={e => this.props.onChange(this.props.id, e)} />
      </div>
    )
  }
}

FormInput.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

FormInput.defaultProps = {
  value: ''
}
