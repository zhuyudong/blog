var EventUtil = {
  getEvent: function(event) {
    return event || window.event
  },
  getTarget: function(event) {
    return event.target || event.srcElement;
  },
  on: function(elem, type, handler) {
    if (elem.addEventListener) {
      elem.addEventListener(type, handler, false);
      return elem;
    } else if (elem.attachEvent) {
      var wrapper = function() {
        var event = window.event;
        event.target = event.srcElement;
        handler.call(elem, event);
      };
      elem.attachEvent('on' + type, wrapper);
      return wrapper;
    }
  },
  off: function(elem, type, handler) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handler, false);
    } else (elem.detachEvent) {
      elem.detachEvent('on' + type, handler);
    }
  },
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else if ('returnValue' in event) {
      event.returnValue = false;
    }
  },
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else if ('cancelBubble' in event) {
      event.cancelBubble = true;
    }
  },
  // keypress 事件跨浏览器获取输入字符
  getChar: function(event) {
    if (event.which == null) {
      return String.fromCharCode(event.keyCode); // IE
    } else if (event.which != 0 && event.charCode != 0) {
      return String.fromCharCode(event.which); 
    } else {
      return null;
    }
  }
}