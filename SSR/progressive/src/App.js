import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import logo from '../assets/logo.svg'
import styles from './App.css'
import withStyle from './withStyle';

/* evolution-1
const App = props => {
  console.log(styles)
  return (
    <div className="app">
      <Header></Header>
      <div className={styles['app-header']}>
        <img src={logo} className="app-logo" alt="logo" />
        <h2>Welcome to React in the Server</h2>
      </div>
    </div>
  )
}
// */

/// * evolution-2 根据路由渲染特定页面
const App = props => {
  return (
    <div className="app">
      <Header></Header>
      <div className={styles['app-header']}>
        <img src={logo} className={styles['app-logo']} alt="logo" />
        <h2>Welcome to React in the Server</h2>
        {renderRoutes(props.route.routes)}
      </div>
    </div>
  )
}
//* /

export default withStyle(App, styles)
