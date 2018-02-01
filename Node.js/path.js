const path = require('path');

// console.log(path.posix.basename('~/Desktop/CODE/webpack/node.js/path.js', '.js'));

console.log(
  path.dirname(__dirname),
  path.basename(__dirname),
  path.parse(__dirname)
);
