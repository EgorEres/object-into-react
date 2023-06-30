import Aggregate from '../Aggregate'
import React from 'react'

export const ArrayLine: React.FC<any> = () => {
  const [open, setOpen] = React.useState(false)
  const array = [1,2,3,4,5]
  return <div style={{ padding: 0, display: 'contents' }}>
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
      transform: open ? 'rotate(90deg)' : '',
      transition: 'transform 0.15s ease 0s',
      cursor: 'pointer'
    }}
    onClick={e => {
      e.stopPropagation()
      setOpen(!open)
    }}
  />
  <span
    onClick={e => {
      e.stopPropagation()
      open && setOpen(true)
    }}
    style={{ cursor: 'pointer', color: '#303942' }}
  >
    {' '}
    {!open && <span style={{ color: '#303942' }}>({array.length})</span>}
    {' '}
    {'['}
    {!open ? <span style={{ color: '#c8c8c8' }}>...</span> : <Aggregate element={array} isOpen />}
    {']'}
  </span>

</div>
}

class Line extends React.Component<any, any> {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }
  render () {
    // @ts-ignore
    const { array } = this.props
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
          this.state.open && this.setState({ open: true })
        }}
        style={{ cursor: 'pointer', color: '#303942' }}
      >
        {' '}
        {!this.state.open && <span style={{ color: '#303942' }}>({array.length})</span>}
        {' '}
        {'['}
        {!this.state.open ? <span style={{ color: '#c8c8c8' }}>...</span> : <Aggregate element={array} isOpen />}
        {']'}
      </span>

    </div>)
  }
}

export default Line
