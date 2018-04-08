http缓存
- 代理缓存
- 私有缓存（浏览器本地缓存）

本地缓存相关的http header有Cache-Control、Expires，都由服务器返回
- `Cache-Control` 相对值，再次发送前浏览器计算浏览器计算上次请求时间加上这个值是否过期（落后当前时间），过期则再次请求，没过期则从本地缓存取
  - no-cache 不使用本地缓存，使用**协商缓存**即询问服务器是否过期，如之前请求返回中有 `Etag` 则带上
  - no-store 禁止浏览器缓存，每次都新请求
  - public 可被所有用户缓存，包括终端和CDN等中间代理服务器
  - private 只能被终端用户缓存
  - max-age 从当前请求开始，允许获取的响应被重用的最长时间 `Cache-Control: public, max-age=1000` 单位s，max-age优先级高于`Expires`
- `Expires: Web, Jan 10 2018 00:27:45 GMT` 是绝对时间，表示这个时间前都有效，除非大于`Cache-Control` 的max-age值

协商缓存在以下情况出现，服务器再根据 `Last-Modified/If-Modified-Since`、与 `ETag/If-None-Match` 来判断是返回 `304 Not Modified` 或 新资源
- 没有 Cache-Control 和 Expires
- Cache-Control 和 Expires 过期了
- Cache-Control 值为 no-cache 时

1. 根据时间来判断内容是否过期
`Last-Modified: Web, Jan 10 2018 00:27:45 GMT` 在服务器第一次返回该资源时在其上加上修改时间，
第二次请求（协商缓存）时在请求头上带上 `Last-Modified-Since: Web, Jan 10 2018 00:27:45 GMT`，如果没有新的则返回`304 Not Modified` 且不包含`Last-Modified` ，如果有新的
则返回 `Last-Modified: Web, Jan 11 2018 00:27:45 GMT`

第一次返回
```http
Cache-Control:max-age=3600
Expires: Fri, Jan 12 2018 00:27:04 GMT
Last-Modified: Wed, Jan 10 2018 00:27:04 GMT
```
第二次请求
```http
Last-Modified-Since: Wed, Jan 10 2018 00:27:04 GMT
```

2. 根据内容来判断是否过期
第一次返回
```http
Cache-Control: public, max-age=3150000,
Etag: "15f0fff99ed5aae4edffdd6496d7131f"
```
第二次请求
```http
If-Modified-Match: "15f0fff99ed5aae4edffdd6496d7131f"
```