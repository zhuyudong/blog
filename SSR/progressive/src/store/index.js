import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'

/* evolution-1
const store = createStore(reducer, applyMiddleware(thunk))

export default store
// */

/* evolution-2
export const createStore () => {
  return createStore(reducer, applyMiddleware(thunk))
  // return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}

export const getClientStore = () => {
  const defaultState = window.__INITIAL_STATE__ ? window.__INITIAL_STATE__.state : {}
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}
// */

/// * evolution-3
import clientAxios from '../client/request'
import serverAxios from '../server/request'

// 数据注水
export const getServerStore = () => {
  // return createStore(reducer, applyMiddleware(thunk))
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}

// 数据脱水
export const getClientStore = () => {
  const defaultState = window.__INITIAL_STATE__ ? window.__INITIAL_STATE__.state : {}
  // return createStore(reducer, defaultState, applyMiddleware(thunk))
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
//* /
