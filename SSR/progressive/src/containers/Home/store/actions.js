import { stringify } from 'querystring'
import axios from 'axios'
import { CHANGE_LIST } from './constants'

const changeList = list => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (payload) => {
  /* equal-1 promise
  return dispatch => {
    return axios.get('url').then(res => {
      const list = res.data.data
      dispatch(changeList(list))
    })
  }
  // */

  /// * equal-2 async/await
  // 入参默认有 dispatch、getState 两个参数，通过在 createStore 中 applyMiddleware(thunk.withExtraArgument(serverAxios) 注入 axiosInstance
  return async (dispatch, getState, axiosInstance) => {
    /// * mock
    const list = await new Promise(resolve => {
      const { limit } = payload
      const list = [...Array(limit)].map((i, ix) => ({id: ix.toString(), title: `title${ix}`}))
      setTimeout(() => {
        resolve(list)
      }, 0)
    })
    //* /

    /* request
    // http://nodejs.cn/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options
    const res = await axiosInstance.get(`/api/list?${stringify(payload)}`)
    const list = res && res.data && res.data.data || []
    // */
    dispatch(changeList(list))
  }
  //* /
}
