/* 适配器模式 */

var googleMap = {
  show: function() {
    console.log('开始渲染google地图');
  }
};

var baiduMap = {
  display: function() {
    console.log('开始渲染百度地图');
  }
};

var baiduMapAdapter = {
  show: function() {
    baiduMap.display();
  }
}

renderMap(googleMap);
renderMap(baiduMapAdapter);