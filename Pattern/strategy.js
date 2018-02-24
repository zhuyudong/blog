/*策略模式*/
// 奖金计算策略
var strategies = {
  'S': function(salary) {
    return salary * 4;
  },
  'A': function(salary) {
    return salary * 3;
  },
  'B': function(salary) {
    return salary * 2;
  }
};
// 引用策略
var calculateBonus = function(level, salary) {
  return strategies[level](salary);
}
// 测试
console.log(calculateBonus('S', 20000));
console.log(calculateBonus('A', 20000));
console.log(calculateBonus('B', 20000));

// 校验策略
var validateStrategies = {
  isEmpty: function(val, errorMsg) {
    if (!val) {
      return errorMsg;
    }
  },
  isURL: function(val, errorMsg) {
    if (!new RegExp("^(http:\\/\\/|https:\\/\\/)?([\\w\\-]+\\.)+[\\w\\-]+(\\/[\\w\\-\\.\\/?\\@\\%\\!\\&=\\+\\~\\:\\#\\;\\,]*)?$").test(val)) {
      return errorMsg;
    }
  },
  isEmail: function(val, errorMsg) {
    if (!new RegExp('\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+').test(val)) {
      return errorMsg;
    }
  },
  isMaxLength: function(val, length, errorMsg) {
    if (val.length > length) {
      return errorMsg;
    }
  },
  isMinLength: function(val, length, errorMsg) {
    if (val.length < length) {
      return errorMsg;
    }
  }
}
// 
var validator = function() {
  // 缓存验证策略
  this.cache = [];
};
validator.prototype.add = function(dom, rules) {
  var self = this;
  for (var i = 0, rule; rule = rules[i++];) {
    (function(rule) {
      var strategyAry = rule.strategy.split(':');
      var errorMsg = rule.errorMsg;
      self.cache.push(function() {
        var strategy = strategyAry.shift();
        strategyAry.unshift(dom.value);
        strategyAry.push(errorMsg);
        return validateStrategies[strategy].apply(dom, strategyAry);
      })
    })(rule);
  }
}
/* 开始校验 */
validator.prototype.start = function () {
  for (var i = 0, validateFunc; validateFunc = this.cache[i++];) {
      var errorMsg = validateFunc();
      if (errorMsg) {
          return errorMsg;
      }
  }
};
// 测试 <label for="email">邮箱：</label><input type="text" name="email" value="1@qq">
var validatorInstance = new validator();
validatorInstance.add(
  document.getElementsByName("email")[0], 
  [{
    strategy: "isEmpty",
    errorMsg: "内容不能为空"
  },{
    strategy: "isMaxLength:10",
    errorMsg: "内容长度不能超过10"
  },{
    strategy: "isEmail",
    errorMsg: "email格式不对"
  }]
);
errorMsg = validatorInstance.start();