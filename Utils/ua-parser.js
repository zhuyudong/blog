;(function(window, undefined) {
  "use strict"
  /* 定义常量 */
  var LIBVERSION = "0.7.20",
    EMPTY = "",
    UNKOWN = "?",
    FUNC_TYPE = "function",
    UNDEF_TYPE = "undefined",
    OBJ_TYPE = "object",
    STR_TYPE = "string"

  var regexs = {
    browser: [[]],
    cpu: [[]],
    engine: [[]],
    device: [[]],
    os: [[]]
  }

  var UAParser = function(uastring, extensions) {
    if (typeof uastring === "object") {
      extensions = uastring
      uastring = undefined
    }

    if (!(this instanceof UAParser)) {
      return new UAParser(uastring, extensions).getResult()
    }
    var ua =
      uastring || (window && window.navigator && window.navigator.userAgent)
        ? window.navigator.userAgent
        : ""
    var rgxmap = extensions ? util.extend(regexs, extensions) : regexs

    this.getBrowser = function() {}

    this.getCPU = function() {}
  }

  /* 检测环境 */
  if (typeof exports !== "undefined") {
    // node.js env
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = UAParser
    }
    exports.UAParser = UAParser
  } else {
    if (typeof define === "function" && define.amd) {
      define(function() {
        return UAParser
      })
    } else if (window) {
      window.UAParser = UAParser
    }
  }
})(typeof window === "object" ? window : this)
