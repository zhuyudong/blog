function createStore(reducer, initialState, enhancer) {
  // 对createStore增强，类似redux-devtools-extension
  return enchancer(createStore)(reducer, initialState);
}

// 当前reducer，支持通过store.replaceReducer 替换reducer，为代码热替换提供可能
var currentReducer = reducer; 
var currentState = initialState;
// 监听 store 变化的监听器
var listeners = [];
var isDiapatching = false;
function getState() {
  return currentState;
}

//
function subscribe(listener) {
  listeners.push(listener);
  var isSubscribed = true;
  return function unsubScribe() {
    if (!isSubscribed) return;
    isSubscribed = false;
    var index = listener.indexOf(listener);
    listeners.splice(index, 1);
  }
}

// dispatch


// replaceReducer
function replaceReducer(nextReducer) {
  currentReducer = nextReducer;
  dispatch({type: ActionTypes.INT});
}