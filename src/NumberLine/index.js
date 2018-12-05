import React from 'react'

class Line extends React.Component {
  render () {
    const { number } = this.props
    return <span style={{ color: '#180aa9' }}>{number}</span>
  }
}

export default Line
