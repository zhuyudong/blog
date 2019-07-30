process.argv.forEach(function(val, index) {
  console.log(`${index}: ${val}`)
})

// node process.js one two=three four
/*
  o: /Users/zhuyudong/.nvm/versions/node/v8.4.0/bin/node
  1: /Users/zhuyudong/Desktop/CODE/webpack/node.js/process.js
  2: one
  3: two=three
  4: four
*/
/**
 * 32位系统约0.7G
 * 64位系统约1.4G
 */
process.memoryUsage()
/**
 {
    rss: 22163456,
    heapTotal: 7708672, 堆内存总量
    heapUsed: 5107024, 堆内存使用
    external: 25730
  }
 */
