// concat 和 slice 是浅拷贝，仅拷贝内部基本类型
var arr1 = ['old', 1, true, null, undefined];
var new_arr1 = arr1.concat();
new_arr1[0] = 'concat';
console.log(arr1);
console.log(new_arr1);
var new__new_arr1 = arr1.slice();
new__new_arr1[0] = 'slice';
console.log(new__new_arr1);

// JSON.parse JSON.stringify是深拷贝，仅对数组、对象有效，对函数无效
var arr2 = ['old', 1, true, ['old1', 'old2'], {old: 1}];
var new_arr2 = JSON.parse(JSON.stringify(arr1));
new_arr2[3] = ['new1', 'new2'];
console.log(arr2);
console.log(new_arr2);

// JSON.parse(JSON.stringify()) 对函数不好使
var arr3 = [function(){
  console.log(a);
}, {
  b: function() {
    console.log(b);
  }
}];
var new_arr3 = JSON.parse(JSON.stringify(arr3));
console.log(new_arr3); // [null, {}]

// 浅拷贝
function shallowCopy (obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// 深拷贝
var deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(ke)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}