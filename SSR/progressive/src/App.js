import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'

///* evolution-1
const App = props => {
  return (
    <div>
      <Header></Header>
    </div>
  )
}
//*/

/* evolution-2 根据路由渲染特定页面
const App = props => {
  return (
    <div>
      <Header></Header>
      {renderRoutes(props.route.routes)}
    </div>
  )
}
//*/

export default App
