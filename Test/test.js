'use strict';

require('should');
const index = require('./index');
const bef = require('./before.js');
const nextTick = require('./nextTick');
const promise = require('./promise');
const generator = require('./generator');

describe('Test index.js', () => {
  it('should get "hello world!"', () => {
    index().should.be.eql('hello world!');
  });
  it('should not get "hello world"', () => {
    index().should.not.be.eql('hello world');
  });
});
describe('Test before.js', () => {
  let param = 'none';
  before(() => param = 'jack');
  after(() => param = 'hack');
  it('should get "jack say: hello world!"', () => {
    bef(param).should.be.eql('jack say: hello world!');
  });
});
describe('Test nextTick.js', () => {
  it('should be "hello process.nextTick"', done => {
    nextTick('process.nextTick', (rst) => {
      rst.should.be.eql('hello process.nextTick');
      done();
    })
  });
});
/**
 * fulfilled()
 * fulfilledWith()
 * rejected()
 * rejectedWith()
 */
describe('Test promise.js', () => {
  it('should be "hello promise"', () => {
    // 必须要return
    return promise('promise').should.be.fulfilledWith('hello promise');
  });
});
describe('Test generator.js', () => {
  it('should be "hello generator"', () => {
    // 必须要return
    return generator('generator').should.be.fulfilledWith('hello generator');
  });
});


