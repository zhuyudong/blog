import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

/* evolution-1 组件式写法
import React from "react"
import { Route } from "react-router-dom"
export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="*" exact component={NotFound} />
  </div>
)
// */

/// * evolution-2 配置式写法
import App from './App'
export default [
  {
    component: App,
    routes: [
      {
        key: 'home',
        path: '/',
        exact: true,
        component: Home,
        getInitialProps: Home.getInitialProps
      },
      {
        key: 'login',
        path: '/login',
        exact: true,
        component: Login
      },
      {
        key: '404',
        path: '*',
        component: NotFound
      }
    ]
  }
]
//* /
