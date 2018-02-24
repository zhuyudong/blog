const util = require('util');
const EventEmitter = require('events');

class ChildClass extends EventEmitter {
  constructor(options) {
    super(options);
  }
}
const childClass = new ChildClass();

function ChildFunc() {
  EventEmitter.call(this);
}
util.inherits(ChildFunc, EventEmitter);
ChildFunc.prototype.write = function(data) {
  this.emit('data', data);
}
const childFunc = new ChildFunc();
console.log(childFunc instanceof EventEmitter);
console.log(childFunc.super_ === EventEmitter);
childFunc.on('data', (data) => {
  console.log(`receive data: ${data}`);
});
childFunc.write('run perfect！');