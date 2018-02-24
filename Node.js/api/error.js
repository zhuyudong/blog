// 1
/*
function fetch(callback) {
  setTimeout(() => {
    console.log('请求失败');
  }, 1000);
}
fetch(() => {
  // 永远不会执行
  console.log('请求处理');
});
//*/

// 2
/*
function fetch(callback) {
  setTimeout(() => {
    throw Error('请求失败');
  }, 1000);
}
try {
  fetch(() => {
    // 永远不会执行
    console.log('请求处理');
  });
} catch (err) {
  // 永远不会执行
  console.error('catch: ', err);
}
process.on('uncaughtException', (err) => {
  // 捕获到
  console.error('uncaughtException: ', err);
});
process.on('unhandledRejection', (err) => {
  // 永远不会执行
  console.error('unhandledRejection: ', err);
});
//*/

// 3
function fetch(handleError, callback) {
  setTimeout(() => {
    handleError('请求失败');
  });
}
fetch(re => {
  // 执行
  console.log('first callback: ', re);
}, re => {
  // 永远不会执行
  console.log('second callback: ', re);
});