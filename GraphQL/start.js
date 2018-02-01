require('babel-core/register')({
  'presets': [
    ['env', {
      "targets": {
        "node": "current"
      }
    }]
  ]
});
require('babel-polyfill');
require('./server');