import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import Home from '../containers/Home'
import Login from '../containers/Login'
import NotFound from '../containers/NotFound'
import Routes from '../Routes'

export const render = (store, routes, req, context) => {
  /*--------------------------------------------------------------------*/
  /* evolution-1 简单组件
  const content = renderToString(<Home />)
  return `
    <html>
      <head>
        <title>express</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `
  //*/

  /*--------------------------------------------------------------------*/
  /* evolution-2 同构，对客户端代码打包
  const content = renderToString(<Home />)
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `
  //*/

  /*--------------------------------------------------------------------*/
  ///* evolution-3 引入路由
  // StaticRouter location 让服务端找到指定页面 context 必传
  const content = renderToString(
    <StaticRouter location={req.path} context={context || {}}>
      {Routes}
    </StaticRouter>
  )
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  //*/

  /*--------------------------------------------------------------------*/
  /* evolution-4 引入路由
  // StaticRouter location 让服务端找到指定页面 context 必传
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <div>{renderRouters(routes)}</div>
    </StaticRouter>
  )
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  //*/

  /*--------------------------------------------------------------------*/
  /* evolution-5 集成 redux
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRouters(routes)}</div>
      </StaticRouter>
    </Provider>
  )
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  //*/

  /*--------------------------------------------------------------------*/
  /* eovlution-6 集成 react-helmet
  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  //*/

  /*--------------------------------------------------------------------*/
  /* eovlution-7 支持 css
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
        <div id='root'>${content}</div>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  //*/

  /*--------------------------------------------------------------------*/
  /* eovlution-8 数据注水
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
        <div id='root'>${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/client.bundle.js'></script>
      </body>
    </html>
  `
  //*/
}
