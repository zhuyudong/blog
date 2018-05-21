var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  get counter() { // 获取counter值都会进入这里
    // console.log('excute get counter');
    return counter;
  },
  incCounter: incCounter
}