'use strict';

require('should');
const promise = require('./promise');

setTimeout(() => {
  describe('Test promise.js by --delay', () => {
    it('should be "hello promise" at 1s after', () => {
      return promise('promise').should.be.fulfilledWith('hello promise');
    });
    it('should be "hello" at 1s after', () => {
      return promise().should.be.fulfilledWith('hello');
    });
  });
  run();
}, 1000);