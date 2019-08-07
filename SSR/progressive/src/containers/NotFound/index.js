import React, { Component } from "react"
import withStyle from "../../withStyle"
import styles from './style.css'

class NotFound extends Component {
  UNSAFE_componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.NotFound = true)
  }

  render() {
    return (
      <div>
        <div>404</div>
      </div>
    )
  }
}

export default withStyle(NotFound, styles)
