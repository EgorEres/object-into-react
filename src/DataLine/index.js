import React from 'react'

class Line extends React.Component {
  render () {
    const { date } = this.props
    return <span style={{ color: '#180aa9' }}>{date}</span>
  }
}

export default Line
