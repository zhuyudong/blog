// 对象监听
const watch = (object, onChange) => {
  const handler = {
    get (target, property, receiver) {
      try {
        return new Proxy(target[property], handler);
      } catch(err) {
        return Reflect.get(target, property, receiver);
      }
    },
    // 赋值时触发
    defineProperty(target, property, descriptor) {
      // 赋值时触发回调函数
      onChange();
      return Reflect.defineProperty(target, property, descriptor);
    },
    // 删除属性时触发
    deleteProperty(target, property) {
      onChange();
      return Reflect.deleteProperty(target, property);
    }
  }
  return new Proxy(object, handler);
};
let obj = {
  a: 123,
  b: {
    c: 333
  }
};
let i = 0;
let watchObj = watch(obj, () => {console.log('Object changed: ', ++i)});
watchObj.b.c = 444;