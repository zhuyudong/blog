import React from "react"
import ReactDOM from "react-dom"
import whyDidYouRender from "@welldone-software/why-did-you-render"

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "darkturquoise"
})

function reducer(state, action) {
  switch (action.type) {
    case "broken-set-count":
      return { count: "action.payload.count" }
    case "set-count":
      if (action.payload.count === state.count) {
        return state
      }
      return { count: action.payload.count }
    default:
      return state
  }
}

const initialState = { count: "0" }

function Main() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const inputRef = React.createRef()

  return (
    <div>
      <p>current count: {state.count}</p>
      <input ref={inputRef} defaultValue="0" />
      <button
        onClick={() =>
          dispatch({
            type: "broken-set-count",
            payload: { count: inputRef.current.value }
          })
        }
      >
        broken set count
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "set-count",
            payload: { count: inputRef.current.value }
          })
        }
      >
        correct set count
      </button>
      <button onClick={() => console.clear()}>clear console</button>
    </div>
  )
}

Main.whyDidYouRender = true

const rootElement = document.getElementById("root")
ReactDOM.render(<Main />, rootElement)
