```js
// req
IncomingMessage {
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
    pipes: null,
    pipesCount: 0,
    flowing: null,
    ended: false,
    endEmitted: false,
    reading: false,
    sync: true,
    needReadable: false,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
    paused: true,
    emitClose: true,
    autoDestroy: false,
    destroyed: false,
    defaultEncoding: 'utf8',
    awaitDrain: 0,
    readingMore: true,
    decoder: null,
    encoding: null
  },
  readable: true,
  _events: [Object: null prototype] {
    end: [Function: resetHeadersTimeoutOnReqEnd]
  },
  _eventsCount: 1,
  _maxListeners: undefined,
  socket: Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      paused: false,
      emitClose: false,
      autoDestroy: false,
      destroyed: false,
      defaultEncoding: 'utf8',
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    _events: [Object: null prototype] {
      end: [Array],
      drain: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [Object]
    },
    writable: true,
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    _server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    timeout: 120000,
    parser: HTTPParser {
      '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
      '2': [Function: parserOnBody],
      '3': [Function: parserOnMessageComplete],
      '4': [Function: bound onParserExecute],
      _headers: [],
      _url: '',
      socket: [Circular],
      incoming: [Circular],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      parsingHeadersStart: 0
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    _paused: false,
    _httpMessage: ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: [Circular],
      connection: [Circular],
      _header: null,
      _onPendingData: [Function: bound updateOutgoingData],
      _sent100: false,
      _expect_continue: false,
      [Symbol(isCorked)]: false,
      [Symbol(outHeadersKey)]: null
    },
    [Symbol(asyncId)]: 4,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner)]: [Circular]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
      _idlePrev: [Timeout],
      _idleNext: [TimersList],
      _idleStart: 9001,
      _onTimeout: [Function: bound ],
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: false,
      [Symbol(refed)]: false,
      [Symbol(asyncId)]: 5,
      [Symbol(triggerId)]: 4
    },
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  connection: Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      paused: false,
      emitClose: false,
      autoDestroy: false,
      destroyed: false,
      defaultEncoding: 'utf8',
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    _events: [Object: null prototype] {
      end: [Array],
      drain: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [Object]
    },
    writable: true,
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    _server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    timeout: 120000,
    parser: HTTPParser {
      '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
      '2': [Function: parserOnBody],
      '3': [Function: parserOnMessageComplete],
      '4': [Function: bound onParserExecute],
      _headers: [],
      _url: '',
      socket: [Circular],
      incoming: [Circular],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      parsingHeadersStart: 0
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    _paused: false,
    _httpMessage: ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: [Circular],
      connection: [Circular],
      _header: null,
      _onPendingData: [Function: bound updateOutgoingData],
      _sent100: false,
      _expect_continue: false,
      [Symbol(isCorked)]: false,
      [Symbol(outHeadersKey)]: null
    },
    [Symbol(asyncId)]: 4,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner)]: [Circular]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
      _idlePrev: [Timeout],
      _idleNext: [TimersList],
      _idleStart: 9001,
      _onTimeout: [Function: bound ],
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: false,
      [Symbol(refed)]: false,
      [Symbol(asyncId)]: 5,
      [Symbol(triggerId)]: 4
    },
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: false,
  headers: {
    host: 'localhost:8000',
    connection: 'keep-alive',
    pragma: 'no-cache',
    'cache-control': 'no-cache',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) ' +
      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 ' +
      'Safari/537.36',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9',
    cookie: 'sid=d7908fde-5d12-4c9d-a7b9-478cb50acd48; ' +
      '_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE0MDYsImlhdCI6MTU2MzQ0NTU4NiwiZXhwIjoxNTY0MDUwMzg2fQ.Pb4aXA560co-ShyvIhVY2c6ObsHmJFI96S2S2nDLLx0; ' +
      '_yapi_uid=1406; _ga=GA1.1.1553160729.1563503076; ' +
      'io=-FaU9PIuD0vRof18AAAA'
  },
  rawHeaders: [
    'Host',
    'localhost:8000',
    'Connection',
    'keep-alive',
    'Pragma',
    'no-cache',
    'Cache-Control',
    'no-cache',
    'Upgrade-Insecure-Requests',
    '1',
    'User-Agent',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) ' +
      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 ' +
      'Safari/537.36',
    'Accept',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Encoding',
    'gzip, deflate, br',
    'Accept-Language',
    'zh-CN,zh;q=0.9',
    'Cookie',
    'sid=d7908fde-5d12-4c9d-a7b9-478cb50acd48; ' +
      '_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE0MDYsImlhdCI6MTU2MzQ0NTU4NiwiZXhwIjoxNTY0MDUwMzg2fQ.Pb4aXA560co-ShyvIhVY2c6ObsHmJFI96S2S2nDLLx0; ' +
      '_yapi_uid=1406; _ga=GA1.1.1553160729.1563503076; ' +
      'io=-FaU9PIuD0vRof18AAAA'
  ],
  trailers: {},
  rawTrailers: [],
  aborted: false,
  upgrade: false,
  url: '/',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client: Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      paused: false,
      emitClose: false,
      autoDestroy: false,
      destroyed: false,
      defaultEncoding: 'utf8',
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    _events: [Object: null prototype] {
      end: [Array],
      drain: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [Object]
    },
    writable: true,
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    _server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    timeout: 120000,
    parser: HTTPParser {
      '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
      '2': [Function: parserOnBody],
      '3': [Function: parserOnMessageComplete],
      '4': [Function: bound onParserExecute],
      _headers: [],
      _url: '',
      socket: [Circular],
      incoming: [Circular],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      parsingHeadersStart: 0
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    _paused: false,
    _httpMessage: ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: [Circular],
      connection: [Circular],
      _header: null,
      _onPendingData: [Function: bound updateOutgoingData],
      _sent100: false,
      _expect_continue: false,
      [Symbol(isCorked)]: false,
      [Symbol(outHeadersKey)]: null
    },
    [Symbol(asyncId)]: 4,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner)]: [Circular]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
      _idlePrev: [Timeout],
      _idleNext: [TimersList],
      _idleStart: 9001,
      _onTimeout: [Function: bound ],
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: false,
      [Symbol(refed)]: false,
      [Symbol(asyncId)]: 5,
      [Symbol(triggerId)]: 4
    },
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  _consuming: false,
  _dumped: false
}

// res
ServerResponse {
  _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
  _eventsCount: 1,
  _maxListeners: undefined,
  outputData: [],
  outputSize: 0,
  writable: true,
  _last: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket: Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      paused: false,
      emitClose: false,
      autoDestroy: false,
      destroyed: false,
      defaultEncoding: 'utf8',
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    _events: [Object: null prototype] {
      end: [Array],
      drain: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [Object]
    },
    writable: true,
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    _server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    timeout: 120000,
    parser: HTTPParser {
      '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
      '2': [Function: parserOnBody],
      '3': [Function: parserOnMessageComplete],
      '4': [Function: bound onParserExecute],
      _headers: [],
      _url: '',
      socket: [Circular],
      incoming: [IncomingMessage],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      parsingHeadersStart: 0
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    _paused: false,
    _httpMessage: [Circular],
    [Symbol(asyncId)]: 4,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner)]: [Circular]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
      _idlePrev: [Timeout],
      _idleNext: [TimersList],
      _idleStart: 9001,
      _onTimeout: [Function: bound ],
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: false,
      [Symbol(refed)]: false,
      [Symbol(asyncId)]: 5,
      [Symbol(triggerId)]: 4
    },
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  connection: Socket {
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: null,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      paused: false,
      emitClose: false,
      autoDestroy: false,
      destroyed: false,
      defaultEncoding: 'utf8',
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    _events: [Object: null prototype] {
      end: [Array],
      drain: [Array],
      timeout: [Function: socketOnTimeout],
      data: [Function: bound socketOnData],
      error: [Function: socketOnError],
      close: [Array],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 8,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [Object]
    },
    writable: true,
    allowHalfOpen: true,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    _server: Server {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 2,
      _handle: [TCP],
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      maxHeadersCount: null,
      headersTimeout: 40000,
      _connectionKey: '6::::8000',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(asyncId)]: 2
    },
    timeout: 120000,
    parser: HTTPParser {
      '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
      '2': [Function: parserOnBody],
      '3': [Function: parserOnMessageComplete],
      '4': [Function: bound onParserExecute],
      _headers: [],
      _url: '',
      socket: [Circular],
      incoming: [IncomingMessage],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      parsingHeadersStart: 0
    },
    on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
    prependListener: [Function: socketListenerWrap],
    _paused: false,
    _httpMessage: [Circular],
    [Symbol(asyncId)]: 4,
    [Symbol(kHandle)]: TCP {
      reading: true,
      onconnection: null,
      _consumed: true,
      [Symbol(owner)]: [Circular]
    },
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
      _idlePrev: [Timeout],
      _idleNext: [TimersList],
      _idleStart: 9001,
      _onTimeout: [Function: bound ],
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: false,
      [Symbol(refed)]: false,
      [Symbol(asyncId)]: 5,
      [Symbol(triggerId)]: 4
    },
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0
  },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  [Symbol(isCorked)]: false,
  [Symbol(outHeadersKey)]: null
}
```