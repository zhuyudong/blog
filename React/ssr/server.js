import path from 'path';
import Koa from 'koa';
import React from 'react';
import views from 'koa-views';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from './app/main';

const app = new Koa();

app.use(require('koa-static')(__dirname + '/public'));
app.use(views(path.resolve(__dirname, './views'), {
  map: {
    html: 'ejs'
  }
}));
app.use(async ctx => {
  let str = renderToString(<App />); // <div data-reactroot="">hello world</div>
  // console.log(renderToStaticMarkup(<App />)); // <div>hello world</div>
  // ctx.body = 'hello Koa';
  // ctx.body = str;
  await ctx.render('index', {
    root: str
  });
});

app.listen(3000);