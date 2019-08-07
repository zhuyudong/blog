import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import Home from '../containers/Home'
import Login from '../containers/Login'
import NotFound from '../containers/NotFound'
// 主要使用 evolution-2
import Routes from '../Routes'

export const render = ({ store = {}, routes, req, context = {} }) => {
  /* -------------------------------------------------------------------- */
  /* evolution-1 简单组件
  const htmlMarkup = renderToString(<Home />)
  return `
    <html>
      <head>
        <title>express</title>
      </head>
      <body>
        <div id="root">${htmlMarkup}</div>
      </body>
    </html>
  `
  // */

  /* -------------------------------------------------------------------- */
  /* evolution-2 同构，对客户端代码打包
  const htmlMarkup = renderToString(<Home />)
  return `
    <html>
      <head>
        <title>Universal React</title>
      </head>
      <body>
        <div id="root">${htmlMarkup}</div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `
  // */

  /* -------------------------------------------------------------------- */
  /* evolution-3 引入路由
  // StaticRouter location 让服务端找到指定页面 context 必传
  const htmlMarkup = renderToString(
    <StaticRouter location={req.path} context={context || {}}>
      {Routes}
    </StaticRouter>
  )
  return `
    <html>
      <head>
        <title>Universal React</title>
      </head>
      <body>
        <div id='root'>${htmlMarkup}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  // */

  /* -------------------------------------------------------------------- */
  /* evolution-4 引入路由
  // StaticRouter location 让服务端找到指定页面 context 必传
  // Routes 采用 evolution-1
  // const htmlMarkup = renderToString(
  //   <StaticRouter location={req.path} context={context}>
  //     <div>{Routes}</div>
  //   </StaticRouter>
  // )
  // renderRoutes(routes) 类似于 routes.map(route => <Route key={route.key} {...route} />)
  const htmlMarkup = renderToString(
    <StaticRouter location={req.path} context={context}>
      <div>{renderRoutes(routes)}</div>
    </StaticRouter>
  )
  return `
    <html>
      <head>
        <title>Universal React</title>
      </head>
      <body>
        <div id='root'>${htmlMarkup}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  // */

  /* -------------------------------------------------------------------- */
  /* evolution-5 集成 redux
  const htmlMarkup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  )
  return `
    <html>
      <head>
        <title>Universal React</title>
      </head>
      <body>
        <div id='root'>${htmlMarkup}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  // */

  /* -------------------------------------------------------------------- */
  /* eovlution-6 集成 react-helmet
  const htmlMarkup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  )
  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id='root'>${htmlMarkup}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  // */

  /* -------------------------------------------------------------------- */
  /* eovlution-7 支持 css
  const htmlMarkup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  )
  const helmet = Helmet.renderStatic();
  const cssStr = context.css.length ? context.css.join('\n') : ''

  return `
    <html>
      <head>
        <style>${cssStr}</style>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id='root'>${htmlMarkup}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  // */

  /// * -------------------------------------------------------------------- */
  // https://reacttraining.com/react-router/web/api/StaticRouter
  // https://reacttraining.com/react-router/web/guides/server-rendering
  const htmlMarkup = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  )
  const helmet = Helmet.renderStatic()
  const cssStr = context.css.length ? context.css.join('\n') : ''

  return `
    <html>
      <head>
        <style>${cssStr}</style>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id='root'>${htmlMarkup}</div>
        <script>
          window.__INITIAL_STATE__ = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
}
