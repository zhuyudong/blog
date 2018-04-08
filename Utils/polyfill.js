/* defineProperties */
function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      return typeof v === 'function';
    }

    if (typeof desc !== 'object' || desc === null) {
      throw new TypeError('bad desc');
    }

    var d = {};
    if (hasProperty(desc, 'enumerable')) {
      d.enumerable = !!desc.enumerable;
    }
    if (hasProperty(desc, 'writable')) {
      d.writable = !!desc.writable;
    }
    if (hasProperty(desc, 'configurable')) {
      d.configurable = !!desc.configurable;
    }
    if (hasProperty(desc, 'value')) {
      d.value = desc.value;
    }
    if (hasProperty(desc, 'get')) {
      var g = desc.get;
      if (!isCallable(g) && typeof g !== 'undefined') {
        throw new TypeError('bad get');
      }
      d.get = g;
    }
    if (hasProperty(desc, 'set')) {
      var g = desc.set;
      if (!isCallable(g) && typeof g !== 'undefined') {
        throw new TypeError('bad set');
      }
      d.set = g;
    }
    if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
      throw new TypeError('identity-confused descriptor');
    }
    return d;
  }

  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('bad obj');
  }
  properties = Object(properties);
  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i < keys.length; i++) {
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
  }
  for (var i = 0; i < descs.length; i++) {
    Object.defineProperty(obj, descs[i][0], descs[i][1]);
  }
  return obj;
}

var obj = {};
defineProperties(obj, {
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
console.log(obj);

/* Object.values() */
Object.values = Object.values || function(obj) {
  if (obj !== Object(obj)) {
    throw new TypeError('Object.values called on a non-object');
  }
  var val = [], key;
  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      val.push(obj[key]);
    }
  }
  return val;
}

/* Object.setPrototypeOf() */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

/* Object.create() */
Object.create = Object.create || function (proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object: ' + proto);
    } else if (proto === null) {
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    }

    if (typeof propertiesObject != 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

    function F() {}
    F.prototype = proto;

    return new F();
};