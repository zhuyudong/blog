var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  },
  'property2': {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
for (var prop in obj) {
  console.log(prop, obj[prop]);
  if (obj.hasOwnProperty(prop)) {
    console.log(prop, obj[prop]);
  }
}
console.log(obj);