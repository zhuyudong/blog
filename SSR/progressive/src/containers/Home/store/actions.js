import axios from 'axios'
import { CHANGE_LIST } from './constants'

const changeList = list => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = server => {
  /* equal-1 promise
  return dispatch => {
    return axios.get('url').then(res => {
      const list = res.data.data
      dispatch(changeList(list))
    })
  }
  //*/
  ///* equal-2 async/await
  return async (dispatch, getState, axiosInstance) => {
    /*
    const res = await axiosInstance.get('url')
    const list = res.data.data
    */
    // 模拟返回
    const list = await new Promise(resolve => {
      setTimeout(() => {
        resolve([{ name: '小新', age: 20 }, { name: '小兰', age: 22 }])
      }, 18)
    })
    dispatch(changeList(list))
  }
  //*/
}
