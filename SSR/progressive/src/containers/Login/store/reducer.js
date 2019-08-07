import { LOGIN } from "./constants"

const defaultState = {
  uid: '',
  name: '',
  token: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      const newState = {
        ...action.payload
      }
      return newState
    default:
      return state
  }
}
