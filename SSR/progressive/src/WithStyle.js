import React, { Component } from "react"

export default (Com, styles) => {
  return class StyledComponent extends Component {
    // constructor() {
    //   super()
    //   this.initialProps = Com.getInitialProps ? Com.getInitialProps() : {}
    // }

    // 在服务端注入 css 对象
    UNSAFE_componentWillMount() {
      // console.log(this)
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }

    render() {
      return <Com {...this.props} />
    }
  }
}
