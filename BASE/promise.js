// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise

function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xht = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

?let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('success');
  }, 250);
});
myFirstPromise.then(function(successMessage) => {
  console.log(successMessage);
});

'use strict';
var promiseCount = 0;
function testPromise() {
  let thisPromiseCount = ++promiseCount;
  let log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ')开始（<small>同步代码开始</small>)<br/>');

  let p1 = new Promise((resolve, reject) => {
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ')开始（<small>异步代码开始</small>)<br/>');
    window.setTimeout(() => {
      resolve(thisPromiseCount);
    }, Math.random()*2000 + 1000);
  });

  p1.then(() => {
    log.insertAdjacentHTML('beforeend', val + + ')Promise 已填充完毕（<small>异步代码结束</small>)<br/>');
  }).catch((reason) => {
    console.log('处理失败的 promise (' + reason + ')');
  });

  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (<small>Sync code terminated</small>)<br/>');
}

