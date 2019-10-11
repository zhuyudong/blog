// https://github.com/axios/axios/blob/master/lib/utils.js
function isStandardBrowserEnv() {
  if (
    typeof navigator !== "undefined" &&
    (navigator.product === "ReactNativ" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
  ) {
    return false
  }
  return typeof window !== "undefined" && typeof document !== "undefined"
}
// https://github.com/axios/axios/blob/master/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d\+\-\.:])\/\//i.test(url)
}
/**
 * location:
 * replace {Function}
 * href http://0.0.0.0:8616/data-label/data-management/data-list?query=1
 * ancestorOrigins {DOMStringList}
 * origin 10.19.19.23:8616
 * protocol http:
 * host 10.19.19.23:8616
 * hostname 1-.19.19.23
 * port 8616
 * pathname /data-label/data-management/data-list?query=1
 * search ?query=1
 * hash
 * assign {Function}
 * reload {Function}
 * toString {Function}
 */
/**
 * https://nodejs.org/api/http.html#http_message_headers
 * 不能重复的header：age、authorization、content-type、content-length、etag、
 *   expires、from、host、location、
 *   max-forwards、proxy-authorization、referer、retry-after、user-agent
 *   if-modified-since、if-unmodified-since、last-modified
 */

function isURLSameOrigin() {
  // 判断 origin 和现在 href的 protocol 和 host 是否一致
  return isStandardBrowserEnv ? (function() {})() : function() {}
}

/**
 * cookie
 * name、value、expires、path、domain、secure
 */
