const fs = require('fs');

fs.stat(__dirname + '/package.json', (err, stats) => {
  if (err) throw err;
  console.log(stats);
});