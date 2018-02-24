var viewCommand = (function() {
  var tpl = {
    product: [
      '<div>',
        '<img src="{#src#}" />',
        '<p>{#text#}</p>',
      '</div>'
    ].join(''),
    title: [
      '<div class="title">',
        '<div class="main">',
          '<h2>{#title#}</h2>',
          '<p>{#tips#}</p>',
        '</div>',
      '</div>'
    ].join('')
  },
  html = '';
  function formatString(str, obj) {
    return str.replace(/\{#(\w+)#\}/g, function(match, key) {
      return obj[key];
    })
  }
  var Action = {
    create: function(data, view) {
      if (data.length) {
        for (var i = 0, len = data.length; i < len; i++) {
          html += formatString(tpl[view], data[i]);
        }
      } else {
        html += formatString(tpl[view], data);
      }
    },
    display: function(container, data, view) {
      if (data) {
        this.create(data, view);
      }
      document.getElementById(container).innerHTML = html;
      html = '';
    }
  }
  return function excute(msg) {
    msg.param = Object.prototype.toString.call(msg.param) === '[object Array]' ? msg.param : [msg.param]; 
    Action[msg.command].apply(Action, msg.param);
  }
})();