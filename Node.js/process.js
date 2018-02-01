process.argv.forEach(function(val, index) {
  console.log(`${index}: ${val}`);
});

// node process.js one two=three four
/*
  o: /Users/zhuyudong/.nvm/versions/node/v8.4.0/bin/node
  1: /Users/zhuyudong/Desktop/CODE/webpack/node.js/process.js
  2: one
  3: two=three
  4: four
*/