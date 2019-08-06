import React from 'react'
import ReactDOM from 'react-dom'

/* evolution-1 客户端渲染
import Home from '../containers/Home'

ReactDOM.render(<Home />, document.getElementById('root'))
//*/

/* evolution-2 单个组件
import Home from '../containers/Home'

ReactDOM.hydrate(<Home />, document.getElementById('root'))
//*/

///* evolution-3 多组件，增加路由
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'

const App = () => {
  return <BrowserRouter>{Routes}</BrowserRouter>
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
//*/
