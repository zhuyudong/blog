'use strict';
const co = require('co');

module.exports = co.wrap(function* gen(bu) {
  return `hello ${bu}`
});