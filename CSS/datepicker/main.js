// 当月第一天 new Date(year, month - 1, 1);
// 当月最后一天 new Date(year, month, 0);
// 星期一 - 星期日 [1, 2, 3, 4, 5, 6, 0]
(function() {
  datepicker.buildUi = function(year, month) {
    var monthData = datepicker.getMonthData(year, month);
    var html = '<div class="ui-datepicker-header">' +
        '<a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>' +
        '<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>' +
        '<span class="ui-datepicker-curr-month">' + monthData.year + '-' + monthData.month + '</span>' +
      '</div>' +
      '<div class="ui-datepicker-body">' +
        '<table>' +
          '<thead>' +
            '<tr>' +
              '<th>一</th>' +
              '<th>二</th>' +
              '<th>三</th>' +
              '<th>四</th>' +
              '<th>五</th>' +
              '<th>六</th>' +
              '<th>日</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';
    for (var i = 0; i < monthData.days.length; i++) {
      var date = monthData.days[i];
      if (i%7 === 0) {
        html += '<tr>';
      }
      html += '<td>' + date.showDate + '</td>';
      if (i%7 === 6) {
        html += '</tr>';
      }
    }         
    html += '</tbody></table></div>';
    return html;
  };
  datepicker.init = function(input) {
    var html = datepicker.buildUi();
    // input.innerHTML = html;
    var $wrapper = document.createElement('div');
    $wrapper.className = 'ui-datepicker-wrapper';
    $wrapper.innerHTML = html;
    document.body.appendChild($wrapper);

    var $input = document.querySelector(input);
    var isOpen = true;
    $input.addEventListener('click', function() {
      if (isOpen) {
        $wrapper.classList.remove('ui-datepicker-wrapper-show');
        isOpen = false;
      } else {
        $wrapper.classList.add('ui-datepicker-wrapper-show');
        var left = $input.offsetLeft;
        var top = $input.offsetTop;
        var height = $input.offsetHeigt;
        $wrapper.style.top = top + height + '2px';
        $wrapper.style.left = left + 'px';
        isOpen = true;
      }
    }, false);
  }
})();