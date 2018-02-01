'use strict';

module.exports = bu => new Promise(resolve => {
  if (bu) return resolve(`hello ${bu}`);
  return resolve('hello');
});