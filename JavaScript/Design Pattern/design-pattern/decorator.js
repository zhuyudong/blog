var telInput = document.getElementById('tel_input');
var telWarnText = document.getElementById('tel_warn_text');
var telDemoText = document.getElementById('tel_demo_text');
input.onclick = function() {
  telWarnText.style.display = 'inline-block';
  telDemoText.style.display = 'none';
}

/**
 * 对原有对象属性与方法的添加
 * @param {*} input 
 * @param {*} fn 
 */
var decorator = function(input, fn) {
  var input = document.getElementById(input);
  if (typeof input.onclick === 'function') {
    var oldClickFn = input.onclick;
    input.onclick = function() {
      oldClickFn();
      fn();
    }
  } else {
    input.onclick = fn;
  }
}
decorator('tel_input', function() {
  document.getElementById('tel_demo_text').style.display = 'none';
});
decorator('name_input', function() {
  document.getElementById('name_demo_text').style.display = 'none';
});
decorator('address_input', function() {
  document.getElementById('address_demo_text').style.display = 'none';
});