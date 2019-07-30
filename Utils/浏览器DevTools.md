https://jsonplaceholder.typicode.com/todos/1

可以在浏览器 `console` 面板中直接使用 `await`

```js
response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
json = await response()

await navigator.storage.estimate()
// 电池
console.table(await navigator.getBattery())
// 媒体能力
console.table(
  await navigator.mediaCapabilities.decodingInfo({
    type: "file",
    audio: { contentType: "audio/ogg" }
  })
)
// 一般用来缓存 request 和 response
await caches.keys()
```

shift + command + p 打开命令窗口

[Chrome 控制台 console 的用法](https://www.cnblogs.com/Leo_wl/p/4117446.html)  
控制台方法和属性  
["$$", "$x", "dir", "dirxml", "keys", "values", "profile", "profileEnd", "monitorEvents", "unmonitorEvents", "inspect", "copy", "clear", "getEventListeners", "undebug", "monitor", "unmonitor", "table", "$0", "$1", "$2", "$3", "$4", "$_"]

解决`Uncaught SyntaxError: Identifier: 'a' has already been declared`

1. network 面板下
2. 请求区域右键 clear browser cache
3. 刷新页面

[CacheStorage
](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)
