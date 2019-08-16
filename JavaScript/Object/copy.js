var obj = {
  name: 'name',
  age: 12,
  gender: true
};

var {...obj2} = obj;
obj.name = 'name1';
console.log(obj2); // { name: 'name', age: 12, gender: true }