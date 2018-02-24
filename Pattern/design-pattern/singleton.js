// 命名空间
var Namespace = {
  g: function(id) {
    return document.getElementById(id);
  },
  css: function(id, key, value) {
    this.g(id).style[key] = value;
  },
  html: function(id, value) {
    this.g(id).innerHTML = value;
  },
  on: function(id, type, fn) {
    this.g(id)['on' + type] = fn;
  }
};
// 模块化
var A = {
  Util: {
    util_method1: function(){},
    util_method2: function(){}
  },
  Tool: {
    tool_method1: function(){},
    tool_method2: function(){}
  },
  Ajax: {
    get: function(){},
    post: function(){}
  },
  others: {
    other_method1: function(){},
    other_method2: function(){}
  },
}
// 静态变量
var Conf = (function() {
  // 私有变量
  var conf = {
    MAX_NUM: 100,
    MIN_NUM: 1,
    COUNT: 1000
  };
  // 返回取值器对象
  return {
    get: function(name) {
      return conf[name] ? conf[name] : null
    }
  }
})();
var count = Conf.get('COUNT'); // 1000
// 惰性单例
var LazySingle = (function() {
  // 单例实例引用
  var _instance = null;
  // 单例
  function Single() {
    return {
      publicMethod: function(){},
      publicProperty: '1.0'
    }
  }
  // 获取单例对象接口
  return function() {
    if (!_instance) {
      _instance = Single();
    }
    return _instance;
  }
})();
console.log(LazySingle().publicProperty); // 1.0