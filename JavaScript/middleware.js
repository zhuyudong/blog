// https://cloud.tencent.com/developer/article/1004858
Function.prototype.before = function(fn) {
  var self = this;
  return function() {
    fn.call(this);
    self.call(this, arguments);
  }
}
Function.prototype.before = function(fn) {
  var self = this;
  return function() {
    var res = fn.call(this);
    if (res) {
      self.call(this, arguments);
    }
  }
}
Function.prototype.after = function(fn) {
  var self = this;
  return function() {
    self.apply(this, arguments);
    fn.call(this);
  }
}


function Middleware() {
  this.cache = [];
}
Middleware.prototype.use = function(fn) {
  if (typeof fn !== 'function') {
    throw 'middleware must be a function';
  }
}
Middleware.prototype.next = function(fn) {
  if (this.middlewares && this.middlewares.length > 0) {
    var ware = this.middlewares.shift();
    ware.call(this, this.next.bind(this));
  }
}
Middleware.prototype.handleRequest = function() {
  this.middlewares = this.cache.map(function(fn) {
    return fn;
  });
  this.next();
}