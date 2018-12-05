import React from 'react'

class Line extends React.Component {
  render () {
    const { type } = this.props
    return <span style={{ color: '#c8c8c8' }}>{String(type)}</span>
  }
}

export default Line
