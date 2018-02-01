// 当月第一天 new Date(year, month - 1, 1);
// 当月最后一天 new Date(year, month, 0);
// 星期一 - 星期日 [1, 2, 3, 4, 5, 6, 0]
(function() {
  var datepicker = {};
  datepicker.getMonthData = function(year, month) {
    var ret = [];
    // 默认当前年月
    if (!year || !month) {
      var today = new Date();
      year = today.getFullYear();
      // 真实月份
      month = today.getMonth() + 1;
    }
    // 当月第一天
    var firstDay = new Date(year, month - 1, 1);
    // 判断当月第一天是周几
    var firstDayWeekDay = firstDay.getDay();
    // 星期从1到7
    if (firstDayWeekDay === 0) {
      firstDayWeekDay = 7;
    }
    year = firstDay.getFullYear();
    month = firstDay.getMonth() + 1;

    // 当月上个月最后一天
    var lastDayOfLastMonth = new Date(year, month - 1, 0);
    var lastDateOfLastMonth = lastDayOfLastMonth.getDate();
    // 当月第一天若是周一则不显示上月的
    var preMonthDayCount = firstDayWeekDay - 1;
    // 本月最后一天
    var lastDay = new Date(year, month, 0);
    var lastDate = lastDay.getDate();
    // 获取当月每一天
    for (var i = 0; i < 7*6; i++) {
      var date = i + 1 - preMonthDayCount;
      var showDate = date;
      var thisMonth = month;
      if (date <= 0) {
        // 上一月
        thisMonth = month - 1;
        showDate = lastDateOfLastMonth + date;
      } else if (date > lastDate) {
        // 下一月
        thisMonth = month + 1;
        showDate = showDate - lastDate;
      }
      if (thisMonth === 0) {
        thisMonth = 12;
      }
      if (thisMonth === 13) {
        thisMonth = 1;
      }
      ret.push({
        month: thisMonth,
        date: date,
        showDate: showDate
      });
    }
    // return ret;
    return {
      year: year,
      month: month, 
      days: ret
    }
  }
  window.datepicker = datepicker;
})();