import React from 'react'
import DateLine from '../DataLine'
import NumberLine from '../NumberLine'
import ArrayLine from '../ArrayLine'
import FunctionLine from '../FunctionLine'
import EmptyLine from '../EmptyLine'
import BooleanLine from '../BooleanLine'
import ObjectLine from '../ObjectLine'
import StringLine from '../StringLine'

class Aggregate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isOpen: this.props.isOpen}
    // this.styles = this.styles.bind(this)
  }

  // styles (type) {
  //   switch (type) {
  //     case 'object': {
  //       return {
  //         closeObjectClassName: this.props.closeObjectClassName
  //       }
  //     }
  //   }
  // }

  isDate (value) {
    return value instanceof Date
  }

  isNumber (value) {
    return typeof value === 'number' && isFinite(value)
  }

  isArray (value) {
    return value && typeof value === 'object' && value.constructor === Array
  }

  isFunction (value) {
    return typeof value === 'function'
  }

  isNullorUndefined (value) {
    return value === null || typeof value === 'undefined'
  }

  isBoolean (value) {
    return typeof value === 'boolean'
  }

  isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object
  }

  setPayload (element) {
    if (this.isDate(element)) return <DateLine date={element} />
    if (this.isNumber(element)) return <NumberLine number={element} />
    if (this.isArray(element)) return <ArrayLine array={element} />
    if (this.isFunction(element)) return <FunctionLine func={element} />
    if (this.isNullorUndefined(element)) return <EmptyLine type={element} />
    if (this.isBoolean(element)) return <BooleanLine boolean={element} />
    if (this.isObject(element)) return <ObjectLine object={element} />
    return <StringLine string={element} />
  }

  render () {
    const { element } = this.props
    if (!this.state.isOpen) return <ObjectLine object={element} />
    return Object.keys(element).map((elemKey, index) =>
      <div key={index} style={{ padding: '2px 10px' }} >
        <span style={{ color: '#ac0093' }} onClick={() => console.log('for obj and arr')}>
          {' '}{elemKey}
        </span>
        <span style={{ color: '#303942' }}>: </span>
        {this.setPayload(element[elemKey])}
      </div>
    )
  }
}

export default Aggregate
