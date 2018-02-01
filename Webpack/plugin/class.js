class Plugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    console.log('apply compiler: ', compiler);
    compiler.plugin('emit', (compiler, callback) => {
      console.log('plugin compiler: ', compiler);
    });
  }
}

module.exports = Plugin;