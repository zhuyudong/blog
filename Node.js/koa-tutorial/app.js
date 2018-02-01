const Koa = require('koa');

const app = new Koa();

function iterator(obj) {
  const keys = Object.getOwnPropertyNames(obj);
  keys.forEach(k => {
    const value = obj[k];
    /**
     * app
     * request
     * response
     * req
     * res
     * state
     * accept
     * cookies
     * originalUrl
     */
    // console.log(k);
    // if (typeof value === 'object' && value !== null) {
    //   iterator(value);
    // } else {
    //   console.log('ctx: ', k, value);
    // }
    // IncomingMessage、
    if (k === 'req') {
      // console.log('ctx.req: ', value);
    }
    // ServerResponse
    if (k === 'res') {
      // console.log('ctx.res: ', value);
    }
    // method、url、header
    if (k === 'request') {
      console.log('ctx.request: ', value);
    }
    // status、message、header、body
    if (k === 'response') {
      // console.log('ctx.response: ', value);
    }
  });
}

app.use(async (ctx, next) => {
  console.log('Handle request begin');
  // iterator(ctx);
  const st = Date.now();
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>hello world!</h1>'
  const et = Date.now();
  console.log(`Request url: ${ctx.path}, response time: ${et -st}ms`);
});

app.use(async (ctx, next) => {
  console.log('middleware1 begin');
  await next();
  console.log('middleware1 end');
});

app.use(async (ctx, next) => {
  console.log('middleware2 begin');
  await next();
  console.log('middleware2 end');
});

app.listen(3000, () => {
  console.log('Service is running at http://localhost:3000');
});