// 打印慢reducer
function logSlowReducers(reducers, thresholdInMs = 8) {
  Object.keys(reducers).forEach(name => {
    const reducer = reducers[name];

    reducers[name] = (state, action) => {
      const start = Date.now();
      const result = originalReducer(state, action);
      const diffInMs = Date.now() - start;
      if(diffInMs >= thresholdInMs) {
        console.warn(`Reducer ${name} took ${diffInMs} ms for ${action.type}`);
      }
      return result;
    }
  });
  return reducers;
}


// 特使action
const specialActions = (reducer, reg, actions) => {
  return (state, action) => {
    if (actions.indexOf(action.type) !== -1) {
      return reducer(state);
    }
    if (action.type.match(reg)) {
      return reducer(state);
    }
    return state;
  }
}
combineReducers({
  counter: specialActions(count, /COUNTER$/, [SELECT_RADIO]),
  redio: specialActions(radio, /RADIO$/, [INCREMENT_COUNTER])
});

// 合并action批量执行
const BATCH = 'BATCHED_ACTIONS';
const batchActions = actions => ({type: BATCH, payload: actions});
const canBatchedReducer = reducer => {
  const batchedReducer = (state, action) => {
    if (action.type === BATCH) {
      return action.payload.reducer(batchActions, state);
    }
    return reducer(state, action);
  }
}