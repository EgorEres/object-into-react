import React from 'react'

class Line extends React.Component<any, any> {
  render () {
    const { string } = this.props
    return <span style={{ color: '#c9214c' }}>"{string}"</span>
  }
}

export default Line
