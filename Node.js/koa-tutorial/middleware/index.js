const path = require('path');
const ip = require('ip');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');
const miSend = require('./mi-send');
const miLog = require('./mi-log');

const miHttpError = require('./mi-http-error/');

module.exports = (app) => {
  app.use(miHttpError({
    errorPageFolder: 
  }));
  app.use(miLog(app.env, {
    env: app.env,
    projectName: 'koa2-tutorial',
    appLogLevel: 'debug',
    dir: 'logs',
    serverIP: ip.address()
  }));
  app.use(staticFiles(path.resolve(__dirname, '../public')));
  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }));
  app.use(bodyParser());
  app.use(miSend());
}