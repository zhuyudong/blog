function Plugin(options) {
  this.options = options;
}

Plugin.prototype.apply = function(compiler) {
  console.log('apply compiler: ', compiler);
  compiler.plugin('run', function(compiler, callback) {
    console.log('plugin compiler: ', compiler);
    callback();
  });
};

module.exports = Plugin;