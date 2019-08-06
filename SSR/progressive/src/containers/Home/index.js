/* evolution-1 commonjs 写法
const React = require('react')

const Home = () => {
  return (
    <div>
      <div>Home</div>
    </div>
  )
}

module.exports = {
  default: Home
}
//*/

///* evolution-2 esModule 写法
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header'

/* evolution-1 function component
const Home = () => {
  return (
    <div>
      <div>Home</div>
    </div>
  )
}
//*/

/* evolution-2 class component
class Home extends Component {
  render() {
    return <div>Home</div>
  }
}
//*/

/* evolution-3 事件处理
class Home extends Component {
  handleClick = () => {
    alert('click button')
  }

  render() {
    return (
      <div>
        <div>Home</div>
        <button onClick={this.handleClick}>click me</button>
      </div>
    )
  }
}
//*/

///* evolution-4 引入 react-helmet
class Home extends Component {
  handleClick = () => {
    alert('click button')
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="首页" />
        </Helmet>
        <div>
          {/* 用于演示客户端路由跳转 */}
          <Header />
          <div>Home</div>
        </div>
        <button onClick={this.handleClick}>click me</button>
      </Fragment>
    )
  }
}
//*/

/* evolution-5 集成 redux
class Home extends Component {
  handleClick = () => {
    alert('click button')
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="首页" />
        </Helmet>
        <div>Home</div>
        <button onClick={this.handleClick}>click me</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  list: state.home.newList
})

const mapDisaptchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})
export default connect(mapStateToProps, mapDisaptchToProps)(Home)
//*/

/* evolution-6 使用装饰器
@connect(
  state => state.home,
  dispatch => ({ // dispatch => ({dispatch})
    getHomeList() {
      dispatch(getHomeList())
    }
  })
)
class Home extends Component {
  handleClick = () => {
    alert('click button')
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="首页" />
        </Helmet>
        <div>Home</div>
        <button onClick={this.handleClick}>click me</button>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  list: state.home.newList
})

const mapDisaptchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})
//*/

export default Home
