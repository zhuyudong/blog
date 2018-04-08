// 集合
function MySet() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union; // 并集
  this.insertsect = insertsect; // 交集
  this.subset = subset; // 判断一个集合是否另一个集合的子集
  this.difference = difference; // 集合求补集
  this.contains = contains;
  this.show = show; // 显示当前集合
}
function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this
      .dataStore
      .push(data);
    return true;
  } else {
    console.warn('Can not add ' + data + ', must already be in set');
    return false;
  }
}
function remove(data) {
  //判断元素是否存在集合当中
  var pos = this
    .dataStore
    .indexOf(data);
  if (pos > -1) {
    this
      .dataStore
      .splice(pos, 1);
    return true;
  } else {
    console.warn(data + ' is not in set');
    return false;
  }
}
function show(){
  console.log(this.dataStore);
  return this.dataStore;
}
function contains (data) {
  if( this.dataStore.indexOf(data) > -1 ){
      return true;
  }else{
      return false;
  }
}
function union ( set ) {
  var tempSet = new MySet();
  for( var i = 0 ; i < this.dataStore.length ; i++ ){
      tempSet.add(this.dataStore[i]);
  }
  for( var i = 0 ; i< set.dataStore.length ; i++ ){
      if( !tempSet.contains(set.dataStore[i])){
          tempSet.dataStore.push(set.dataStore[i]);
      }
  }
  return tempSet;
}