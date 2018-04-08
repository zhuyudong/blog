// http://louiszhai.github.io/2016/11/02/ajax/
function getXHR() {
  var vhr = null;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      } catch(e) {
        alert('您的浏览器暂不支持Ajax');
      }
    }
  }
}
/**
 * 实例上没有属性/方法，全部来自原型上
 * xhr << XMLHttpRequest.prototype << XMLHttpRequestEventTarget.prototype << EventTarget.prototype << Object.prototype
 * ["UNSENT",  0 请求已建立但未初始化
 * "OPENED", 1 请求已建立但未发送
 * "HEADERS_RECEIVED", 2 已收到响应头
 * "LOADING", 3 接收数据中
 * "DONE",  4 完成
 * "onreadystatechange", 
 * "readyState", 对应上面的5种状态
 * "timeout",  设置超时 xhr.timeout = '123'; 或 xhr.timeout = ['123'];
 * "withCredentials", 默认跨域请求不携带cookies等信息
 * "upload", 默认返回 XMLHttpRequestUpload对象 onloadstart onprogress onabort onerror onload ontimeout onloadend
 * "responseURL", 响应url或重定向后的url
 * "status", 标准的http状态码
 * "statusText",  http状态码对应的文字提示（标准）
 * "responseType", arrayBuffer blob document json text
 * "response", 
 * "responseText", 只读
 * "responseXML", 只读
 * "open", 
 * "setRequestHeader", 
 * "send", 
 * "abort", 
 * "getResponseHeader", 
 * "getAllResponseHeaders", 
 * "overrideMimeType", 修改response content-type
 * "constructor"]
 */

 var xhr = getXHR();
 // e 是Event实例
 xhr.onreadystatechange = function(e) {
   if (this.readyState === this.HEADERS_RECEIVED) {
     console.log(this.getAllResponseHeaders());
   }
   if (xhr.readyState === 4) {
     var s = xhr.status;
     if ((s >= 200 && s < 300) || s == 304) {
       var resp = xhr.responseText;
     }
   }
 }
xhr.ontimeout = function(e) {
  console.error('请求超时');
}
xhr.upload.onpregress = function(e) {
  var percent = 100 * e.loaded / e.total | 0;
}