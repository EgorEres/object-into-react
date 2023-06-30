import React from 'react'

class Line extends React.Component {
  render () {
    const { func } = this.props
    return <em>
      <span style={{ color: '#180aa9' }}>f </span>
      {func.name} () {'{'}
      <span style={{ color: '#c8c8c8', cursor: 'pointer' }}>...</span>
      {'}'}
    </em>
  }
}

export default Line
