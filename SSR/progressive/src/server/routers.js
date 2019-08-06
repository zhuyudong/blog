import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../client/containers/Home'
import Login from '../client/containers/Login'

///* evolution-1
const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login}></Route>
    </div>
  )
}
//*/

///* evolution-2
//*/
