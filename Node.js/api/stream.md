### 可写流
- 客户端 `HTTP` 请求
- 服务器 `HTTP` 响应
- `fs` 的写入流
- `zlib` 流
- `crypto` 流
- TCP `socket`
- 子进程 `stdin`
- `process.stdin`
- `process.stderr`

```js
console.log(Object.getOwnPropertyDescriptors(stream))
/*
{
  length: { value: 0, writable: false, enumerable: false, configurable: true },
  name: {
    value: 'Stream',
    writable: false,
    enumerable: false,
    configurable: true
  },
  prototype: {
    value: Stream { pipe: [Function] },
    writable: true,
    enumerable: false,
    configurable: false
  },
  Readable: {
    value: [Function: Readable] {
      ReadableState: [Function: ReadableState],
      _fromList: [Function: fromList],
      from: [Function]
    },
    writable: true,
    enumerable: true,
    configurable: true
  },
  Writable: {
    value: [Function: Writable] { WritableState: [Function: WritableState] },
    writable: true,
    enumerable: true,
    configurable: true
  },
  Duplex: {
    value: [Function: Duplex],
    writable: true,
    enumerable: true,
    configurable: true
  },
  Transform: {
    value: [Function: Transform],
    writable: true,
    enumerable: true,
    configurable: true
  },
  PassThrough: {
    value: [Function: PassThrough],
    writable: true,
    enumerable: true,
    configurable: true
  },
  pipeline: {
    value: [Function: pipeline],
    writable: true,
    enumerable: true,
    configurable: true
  },
  finished: {
    value: [Function: eos],
    writable: true,
    enumerable: true,
    configurable: true
  },
  Stream: {
    value: [Function: Stream] {
      Readable: [Function],
      Writable: [Function],
      Duplex: [Function: Duplex],
      Transform: [Function: Transform],
      PassThrough: [Function: PassThrough],
      pipeline: [Function: pipeline],
      finished: [Function: eos],
      Stream: [Circular],
      _isUint8Array: [Function: isUint8Array],
      _uint8ArrayToBuffer: [Function: _uint8ArrayToBuffer]
    },
    writable: true,
    enumerable: true,
    configurable: true
  },
  _isUint8Array: {
    value: [Function: isUint8Array],
    writable: true,
    enumerable: true,
    configurable: true
  },
  _uint8ArrayToBuffer: {
    value: [Function: _uint8ArrayToBuffer],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```

https://juejin.im/post/5d25ce36f265da1ba84ab97a

数据来源
1. 控制台
2. request
3. 读取文件

数据走向
1. 控制台
2. response
3. 写入文件

Duplex
- tcp
- zlib
- crypto