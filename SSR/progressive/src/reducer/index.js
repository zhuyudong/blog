import { combineReducers } from 'redux'
import { reducer as homeReducer } from '../containers/Home/store'
import { reducer as loginReducer } from '../containers/Login/store'

// 聚合各模块/页面的 reducer
const reducer = combineReducers({
  home: homeReducer,
  login: loginReducer
})

export default reducer
