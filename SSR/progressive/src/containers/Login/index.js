import React from 'react'
import Header from '../../components/Header'
import withStyle from "../../withStyle"
import styles from './style.css'

const Login = () => {
  return (
    <div>
      <Header />
      <div>登录页</div>
    </div>
  )
}

export default withStyle(Login, styles)
