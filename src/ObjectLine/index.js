import React from 'react'
import Aggregate from '../Aggregate'

class Line extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }
  render () {
    const { object } = this.props
    const objText = JSON.stringify(object).slice(1, 50)
    return (<div style={{ padding: 0, display: 'contents' }}>
      <div
        style={{
          opacity: '0.3',
          margin: '0px',
          padding: '0px',
          display: 'inline-block',
          width: '0px',
          height: '0px',
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          borderLeft: '8px solid rgb(0, 0, 0)',
          transform: this.state.open ? 'rotate(90deg)' : '',
          transition: 'transform 0.15s ease 0s',
          cursor: 'pointer'
        }}
        onClick={e => {
          e.stopPropagation()
          this.setState({ open: !this.state.open })
        }}
      />
      <span
        onClick={e => {
          e.stopPropagation()
          !this.state.open && this.setState({ open: true })
        }}
        style={{ color: '#303942' }}
      >
        {' '}
        {'{'}
        {!this.state.open ? <span style={{ color: '#c8c8c8', cursor: 'pointer' }}>{objText} ...</span> : <Aggregate element={object} isOpen />}
        {'}'}
      </span>

    </div>)
  }
}

export default Line
