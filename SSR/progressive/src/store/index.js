import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'

// 聚合各页面的 reducer
const reducer = combineReducers({
  home: homeReducer
})

///* evolution-1
const store = createStore(reducer, applyMiddleware(thunk))

export default store
//*/

/* evolution-2
export const createStore () => {
  return createStore(reducer, applyMiddleware(thunk))
  // return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}

export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {}
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}
//*/

/* evolution-3
import clientAxios from '../client/request'
import serverAxios from '../server/request'

export const createStore () => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}

export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {}
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}
//*/
