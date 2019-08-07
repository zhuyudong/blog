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
// */

/// * evolution-2 esModule 写法
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import { getHomeList } from './store/actions'
import styles from './style.css'
import withStyle from '../../withStyle'

/* evolution-1 function component
const Home = () => {
  return (
    <div>
      <div>Home</div>
    </div>
  )
}
// */

/* evolution-2 class component
class Home extends Component {
  render() {
    return <div>Home</div>
  }
}
// */

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
// */

/* evolution-4 引入 react-helmet
class Home extends Component {
  handleClick = () => {
    alert("click button")
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="首页" />
        </Helmet>
        <div>
          <Header />
          <div>Home</div>
        </div>
        <button onClick={this.handleClick}>click me</button>
      </Fragment>
    )
  }
}
// */

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
  list: state.home.newsList
})

const mapDisaptchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})
export default connect(mapStateToProps, mapDisaptchToProps)(Home)
// */

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
// */

/// * 7 引入静态方法，服务端请求数据
// 1、class 式写法

@connect(
  state => ({
    list: state.home.newsList
  }),
  dispatch => ({
    // dispatch => ({dispatch})
    getHomeList(payload) {
      dispatch(getHomeList(payload))
    }
  })
)
class Home extends Component {
  handleClick = () => {
    alert('click button')
  }

  getList() {
    const { list } = this.props
    // console.log(this.props)
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }

  componentDidMount() {
    // console.log(this.props)
    if (!this.props.list.length) {
      this.props.getHomeList({limit: 100})
    }
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="首页" />
        </Helmet>
        <div>Home</div>
        <div className="home">
          {this.getList()}
        </div>
        <button onClick={this.handleClick}>click me</button>
      </Fragment>
    )
  }
}
// 2、 函数式写法
// function handleClick(props) {
//   alert("click button")
// }
// const Home = () => {
//   return (
//     <Fragment>
//       <Helmet>
//         <title>Home</title>
//         <meta name="description" content="首页" />
//       </Helmet>
//       <div>Home</div>
//       <button onClick={this.handleClick}>click me</button>
//     </Fragment>
//   )
// }
// Home.getInitialProps = ({ store }) => {
//   store.dispatch(getHomeList())
//   return {}
// }
// */

// const HDHome = withStyle(Home, styles)
// // 传入 redux 对象
// HDHome.getInitialProps = async ({ dispatch }) => {
//   return await dispatch(getHomeList({limit: 100}))
// }

// export default HDHome

export default withStyle(Home, styles)
