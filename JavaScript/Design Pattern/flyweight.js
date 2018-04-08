/* 享元模式 */

/* 文件上传 */
var Upload = function(uploadType) {
  this.uploadType = uploadType;
}
/* 删除文件（内部状态）*/
Upload.prototype.delFile = function(id) {
  uploadManger.setExternalState(id, this); // 把当前id对应的外部状态都组装到共享对象中
  if (this.fileSize < 3000) {
    return this.dom.parentNode.removeChild(this.dom);
  }
  if (window.confirm('确定要删除文件吗？' + this.filenName)) {
    return this.dom.parentNode.removeChild(this.dom);
  }
}
/**
 * 工厂对象实例化
 * 如果某种内部状态的共享对象已被创建过，则直接返回该对象
 * 否则，创建一个新对象
 */
var UploadFactory = (function() {
  var createFlyWeightObjs = {};
  return {
    create: function(uploadType) {
      if (createFlyWeightObjs[uploadType]) {
        return createFlyWeightObjs[uploadType];
      }
      return createFlyWeightObjs[uploadType] = new Upload(uploadType);
    }
  }
})();
/* 管理器封装外部状态 */
var uploadManger = (function() {
  var uploadDatabase = {};
  return {
    add: function(id, uploadType, fileName, fileSize) {
      // 享元对象
      var flyWeightObj = UploadFactory.create(uploadType);
      /* 生成html及其事件响应函数 */
      var dom = document.createElement('div');
      dom.innerHTML = `<span>文件名称：${fileName}，文件大小：${fileSize}</span><button class="delFile">删除</button>`;
      dom.querySelector('.delFile').onclick = function() {
        flyWeightObj.delFile(id);
      }
      document.body.appendChild(dom);
      uploadDatabase[id] = {
        fileName: fileName,
        fileSize: fileSize,
        dom: dom
      };
      return flyWeightObj;
    },
    setExternalState: function(id, flyWeightObj) {
      var uploadData = uploadDatabase[id];
      for (var i in uploadData) {
        flyWeightObj[i] = uploadData[i];
      }
    }
  };
})();
/* 触发上传动作 */
var id = 0;
window.startUpload = function(uploadType, files) {
  for (var i = 0, file; file = files[i++];) {
    var uploadObj = uploadManger.add(++id, uploadType, file.fileName, file.fileSize);
    console.log(uploadObj);
  }
};
startUpload('plugin', [
  {
    fileName: 'asserts/1.txt',
    fileSize: 1000
  }, {
    fileName: 'asserts/2.txt',
    fileSize: 3000,
  }, {
    fileName: 'asserts/3.txt',
    fileSize: 5000
  }
]);
startUpload('flash', [
  {
    fileName: 'asserts/4.txt',
    fileSize: 1000
  },{
    fileName: 'asserts/5.txt',
    fileSize: 3000
  },{
    fileName: 'asserts/6.txt',
    fileSize: 5000
  }
]);