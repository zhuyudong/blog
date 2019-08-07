import React from 'react'
import ReactDOM from 'react-dom'

/* evolution-1 客户端渲染
import Home from '../containers/Home'
// react-data-checksum
ReactDOM.render(<Home />, document.getElementById('root'))
// */

/* evolution-2 单个组件
import Home from '../containers/Home'

ReactDOM.hydrate(<Home />, document.getElementById('root'))
// */

/* evolution-3 多组件，增加路由
import { BrowserRouter } from "react-router-dom"
// evolution-1
import Routes from "../Routes"

const App = () => {
  return <BrowserRouter>{Routes}</BrowserRouter>
}

ReactDOM.hydrate(<App />, document.getElementById("root"))
// */

// /* evolution-4 集成 Redux
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { getClientStore } from '../store'
// evolution-2
import routes from '../Routes'
const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>{renderRoutes(routes)}</div>
      </BrowserRouter>
    </Provider>
  )
}
ReactDOM.hydrate(<App />, document.getElementById('root'))
// */
