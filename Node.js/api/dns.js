const dns = require('dns');

// 调用操作系统底层工具解析
dns.lookup('iana.org', (err, address, family) => {
  console.log(address, family); // 192.0.43.8, Ipv4
});