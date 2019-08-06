import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from './containers/NotFound'
import App from './App'

///* evolution-1 组件式写法
export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="*" exact component={NotFound} />
  </div>
)
//*/

/* evolution-2 配置式写法
export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.getInitalProps
      },
      {
        path: '/login',
        component: Login,
        exact: true
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]
//*/
