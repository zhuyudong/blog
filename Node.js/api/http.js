const http = require("http")

// console.log(Object.getOwnPropertyDescriptors(http))
/*
{
  _connectionListener: {
    value: [Function: connectionListener],
    writable: true,
    enumerable: true,
    configurable: true
  },
  METHODS: {
    value: [
             'ACL',        'BIND',
        'CHECKOUT',     'CONNECT',
            'COPY',      'DELETE',
             'GET',        'HEAD',
            'LINK',        'LOCK',
        'M-SEARCH',       'MERGE',
      'MKACTIVITY',  'MKCALENDAR',
           'MKCOL',        'MOVE',
          'NOTIFY',     'OPTIONS',
           'PATCH',        'POST',
        'PROPFIND',   'PROPPATCH',
           'PURGE',         'PUT',
          'REBIND',      'REPORT',
          'SEARCH',      'SOURCE',
       'SUBSCRIBE',       'TRACE',
          'UNBIND',      'UNLINK',
          'UNLOCK', 'UNSUBSCRIBE'
    ],
    writable: true,
    enumerable: true,
    configurable: true
  },
  STATUS_CODES: {
    value: {
      '100': 'Continue',
      '101': 'Switching Protocols',
      '102': 'Processing',
      '103': 'Early Hints',
      '200': 'OK',
      '201': 'Created',
      '202': 'Accepted',
      '203': 'Non-Authoritative Information',
      '204': 'No Content',
      '205': 'Reset Content',
      '206': 'Partial Content',
      '207': 'Multi-Status',
      '208': 'Already Reported',
      '226': 'IM Used',
      '300': 'Multiple Choices',
      '301': 'Moved Permanently',
      '302': 'Found',
      '303': 'See Other',
      '304': 'Not Modified',
      '305': 'Use Proxy',
      '307': 'Temporary Redirect',
      '308': 'Permanent Redirect',
      '400': 'Bad Request',
      '401': 'Unauthorized',
      '402': 'Payment Required',
      '403': 'Forbidden',
      '404': 'Not Found',
      '405': 'Method Not Allowed',
      '406': 'Not Acceptable',
      '407': 'Proxy Authentication Required',
      '408': 'Request Timeout',
      '409': 'Conflict',
      '410': 'Gone',
      '411': 'Length Required',
      '412': 'Precondition Failed',
      '413': 'Payload Too Large',
      '414': 'URI Too Long',
      '415': 'Unsupported Media Type',
      '416': 'Range Not Satisfiable',
      '417': 'Expectation Failed',
      '418': "I'm a Teapot",
      '421': 'Misdirected Request',
      '422': 'Unprocessable Entity',
      '423': 'Locked',
      '424': 'Failed Dependency',
      '425': 'Unordered Collection',
      '426': 'Upgrade Required',
      '428': 'Precondition Required',
      '429': 'Too Many Requests',
      '431': 'Request Header Fields Too Large',
      '451': 'Unavailable For Legal Reasons',
      '500': 'Internal Server Error',
      '501': 'Not Implemented',
      '502': 'Bad Gateway',
      '503': 'Service Unavailable',
      '504': 'Gateway Timeout',
      '505': 'HTTP Version Not Supported',
      '506': 'Variant Also Negotiates',
      '507': 'Insufficient Storage',
      '508': 'Loop Detected',
      '509': 'Bandwidth Limit Exceeded',
      '510': 'Not Extended',
      '511': 'Network Authentication Required'
    },
    writable: true,
    enumerable: true,
    configurable: true
  },
  Agent: {
    value: [Function: Agent] { defaultMaxSockets: Infinity },
    writable: true,
    enumerable: true,
    configurable: true
  },
  ClientRequest: {
    value: [Function: ClientRequest],
    writable: true,
    enumerable: true,
    configurable: true
  },
  IncomingMessage: {
    value: [Function: IncomingMessage],
    writable: true,
    enumerable: true,
    configurable: true
  },
  OutgoingMessage: {
    value: [Function: OutgoingMessage],
    writable: true,
    enumerable: true,
    configurable: true
  },
  Server: {
    value: [Function: Server],
    writable: true,
    enumerable: true,
    configurable: true
  },
  ServerResponse: {
    value: [Function: ServerResponse],
    writable: true,
    enumerable: true,
    configurable: true
  },
  createServer: {
    value: [Function: createServer],
    writable: true,
    enumerable: true,
    configurable: true
  },
  get: {
    value: [Function: get],
    writable: true,
    enumerable: true,
    configurable: true
  },
  request: {
    value: [Function: request],
    writable: true,
    enumerable: true,
    configurable: true
  },
  maxHeaderSize: {
    get: [Function: get],
    set: undefined,
    enumerable: true,
    configurable: true
  },
  globalAgent: {
    get: [Function: get],
    set: [Function: set],
    enumerable: true,
    configurable: true
  }
}
*/
