import React, { Component } from 'react'

export default (Com, styles) => {
  return class HocComponent extends Component {
    render() {
      return <Com {...this.props} />
    }
  }
}
