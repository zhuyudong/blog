import { stringify } from 'querystring'
import { LOGIN } from "./constants"

const changeLoginStatus = payload => ({
  type: LOGIN,
  payload
})

export const login = (payload) => {
  // 入参默认有 dispatch、getState 两个参数，通过在 createStore 中 applyMiddleware(thunk.withExtraArgument(serverAxios) 注入 axiosInstance
  return async (dispatch, getState, axiosInstance) => {
    ///* request
    // http://nodejs.cn/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options
    const res = await axiosInstance.post(`/api/login?${stringify(payload)}`)
    //*/
    dispatch(changeLoginStatus(res.data))
  }
  //*/
}
