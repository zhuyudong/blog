跨域手段：jsonp、iframe、cors、img、HTML5 postMessage

### iframe
- 跨域完成之后DOM操作和互相之间JavaScript调用没问题
- URL传参有数量限制
- 母页面和iframe间有安全限制

### script
- 直接返回json格式数据，方便处理
- 只能get请求

### img
- 可以访问任何url
- 不能响应文本，只能监听是否响应

```js
// webpack-dev-server
{
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.example.com', // target host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/api': '' // rewrite path
        }
      }
    }
  }
}
```
```js
// http-proxy-middleware
const express = require('express');
const proxy = require('http-proxy-middleware');
const exampleProxy = proxy(options); // options是webpack devServer-proxy配置
const app = express();
app.use('/api', exampleProxy);
app.listen(3000);
```
