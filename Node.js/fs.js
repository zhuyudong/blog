const fs = require('fs');

fs.readFile(__dirname + '/123.txt', (err, result) => {
  const testLines = result.toString().split(/\n/);
  const production = fs.readFileSync(__dirname + '/openid.txt');
  const productionLines = production.toString().split(/\r\n/);
  
  testLines.forEach(i => {
    const arr = i.split(/\t/);
    const userId = arr[1];
    const openId = String(arr[2]);
    // if (openId.indexOf('oem') !== -1) {
    //     console.log(openId);
    // }
    // console.log(7, productionLines[2081] === 'oemj5jlJqUHadYI-C5E_xZCBurTo');
    if (productionLines.includes(openId)) {
      console.log(userId, openId);
    }
  });
});