如果 data 数据类型是 FormData、ArrayBuffer、Buffer、Stream、File、Blob 则直接使用，
如果 data 是 ArrayBufferView 则用 data.buffer
如果 data 是 URLSearchParams，则将content-type设置为 application/x-www-form-urlencode;charset=utf-8
如果 data 是对象则 content-type 设置为 application/json，然后对 JSON.stringify(data)