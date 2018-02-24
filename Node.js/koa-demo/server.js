import Koa from 'koa';
import serve from 'koa-static';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import webpack from 'webpack';
import webpackMiddleware from 'koa-webpack-middleware';
import webpackConf from './webpack.config';

const { devMiddleware, hotMiddleware } = webpackMiddleware;
const compiler = webpack(webpackConf);
const app = new Koa();

app.use(logger());
app.use(bodyParser());
app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConf.output.publicPath
}));
app.use(hotMiddleware(compiler));
app.use(serve(__dirname));

app.use(async (ctx, next) => {
  // await ctx.render('./index.html');
  ctx.body = 'hello';
});

app.listen(3000, () => {
  console.log('Server started on 3000');
});