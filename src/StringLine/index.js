import React from 'react'

class Line extends React.Component {
  render () {
    const { string } = this.props
    return <span style={{ color: '#c9214c' }}>"{string}"</span>
  }
}

export default Line
