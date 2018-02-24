/* 深拷贝 */

// 1. for
var arr = [1, 2, 3, 4, 5];
var arr2 = copyArr(arr);
function copyArr(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  // 以下也可以
  // for (const i in arr) {
  //   res.push(arr[i]);
  // }
  return res;
}
console.log(arr2); // [1, 2, 3, 4, 5]

// 2. slice
var arr3 = [1, 2, 3, 4, 5];
var arr4 = arr3.slice();
console.log(arr4); // [1, 2, 3, 4, 5]

// 3. concat
var arr5 = [1, 2, 3, 4, 5];
var arr6 = arr5.concat();
console.log(arr6); // [1, 2, 3, 4, 5]

// 4. JSON
var arr7 = [1, 2, 3, 4, 5];
var arr8 = JSON.parse(JSON.stringify(arr7));
arr7[2] = 5;
console.log(arr8); // [ 1, 2, 3, 4, 5 ]

// ...
var arr9 = [ 1, 2, 3, 4, 5 ];
var arr10 = [...arr9];
arr9[2] = 5;
console.log(arr10); // [ 1, 2, 3, 4, 5 ]
