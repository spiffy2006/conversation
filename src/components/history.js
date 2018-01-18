import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class History extends Component {
  getHistory () {
    return this.props.history.map((item) => {
      return (
        <div key={item.time}>
          <h3>{item.time}</h3>
          <h4>What went well</h4>
          <p>{item.conversation.well}</p>
          <h4>What went wrong</h4>
          <p>{item.conversation.wrong}</p>
          <h4>What to improve</h4>
          <p>{item.conversation.improve}</p>
        </div>
      )
    })
  }
  render () {
    console.log(this.props.history)
    return (
      <div>
        {this.getHistory()}
      </div>
    )
  }
}

History.propTypes = {
  history: PropTypes.array
}
