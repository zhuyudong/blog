function Delegator(proto, target) {}

Delegator.auto = function(proto, targetProto, targetProp) {}

Delegator.prototype.method = function(name) {}

Delegator.prototype.access = function(name) {}

Delegator.prototype.getter = function(name) {}

Delegator.prototype.setter = function(name) {}

Delegator.prototype.fluent = function(name) {
  var proto = this.proto
  var target = this.target
  this.fluents.push(name)

  proto[name] = function(val) {
    if ("undefined" !== typeof val) {
      this[target][name] = val
      return this
    } else {
      return this[target][name]
    }
  }

  return this
}
