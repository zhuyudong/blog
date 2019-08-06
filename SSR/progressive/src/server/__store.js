/**
 * 提取到 ../common/store 中与客户端共用
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
