import React from 'react'

class Line extends React.Component {
  render () {
    const { boolean } = this.props
    return <span style={{ color: '#180aa9' }}>{boolean.toString()}</span>
  }
}

export default Line
