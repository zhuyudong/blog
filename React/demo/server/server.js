const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.config.dev');

const port = 3001;
const app = require('express')();
const compiler = webpack(config);
const file = path.resolve(__dirname, '../build/index.html');

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', function(req, res) {
  // res.sendFile(file);
  res.sendFile(path.resolve(__dirname, '../template/index.tmp.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});