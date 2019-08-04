/*
// 结合 webpack.IgnorePlugin 演示不构建moment多语言包
import jquery from 'jquery'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')
let r = moment().endOf('day').fromNow()
console.log(r)
//*/


import React from 'react'
import ReactDOM from 'react-dom'

// ReactDOM.render(<h1>jsx</h1>, document.getElementById('root'))
// 等效于
ReactDOM.render(<h1>jsx</h1>, window.root)