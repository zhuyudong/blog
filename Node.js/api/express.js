app.use = function use(fn) {
  var offset = o;
  var path = '/';
  // 处理中间件数组的情况
  if (typeof fn !== 'function') {
    var arg = fn;

    while(Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }

    if (typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
  }
  // 复制中间件列表然后展平为一维
  var fns = flattern(slice.call(arguments, offset));

  if (fns.length === 0) {
    throw new TypeError('app.use() requires a middleware function')
  }
  // setup router
  this.lazyrouter();
  var router = this._router;

  fns.forEach(function(fn) {
    if (!fn || !fn.handle || !fn.set) {
      return router.use(path, fn);
    }
    debug('.use app under %s', path);
    fn.mountpath = path;
    fn.parent = this;

    router.use(path, function mounted_app(req, res, next) {
      var orig = req.app;
      fn.handle(req, res, function (err) {
        setPrototypeOf(req, orig.request);
        setPrototypeOf(res, orig.response);
        next(err);
      });
    });
    // mounted an app
    fn.emit('mount', this);
  }, this);
  return this;
}