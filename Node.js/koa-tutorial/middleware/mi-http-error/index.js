const path = require('path');
const nunjucks = require('nunjucks');

module.exports = () => {
  let filename = '';
  return (ctx, next) => {
    try {
      await next();
      if (ctx.response.status === 404 && !ctx.response.body) ctx.throw(404);
    } catch (err) {
      const status = parseInt(e.status);
      const { message } = e;
      if (status >= 400) {
        switch(status) {
          case 400:
          case 404:
          case 500:
            filename = status;
            break;
          default:
            filename = 'other';
        }
      }
    }
  }
}