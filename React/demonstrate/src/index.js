import React from "react"
import ReactDOM from "react-dom"
import { times } from "lodash"
import whyDidYouRender from "@welldone-software/why-did-you-render"

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "darkturquoise"
})

class BigListPureComponent extends React.PureComponent {
  static whyDidYouRender = true
  render() {
    console.log(
      "BigListPureComponent Re-Render! - We don't want to get here too often."
    )
    return (
      <div>
        <h2>BigListPureComponent</h2>
        <div>
          {times(3000).map(n => (
            <div key={n}>Element #{n}</div>
          ))}
        </div>
      </div>
    )
  }
}

const bigListStyle = { width: "100%" }

class Main extends React.Component {
  state = { count: 0 }
  render() {
    return (
      <div>
        <h1>Big List (Main Demo)</h1>
        <p>
          {
            'Open the console and notice how the heavy list re-renders on every click on "Increase!" even though it\'s props are the same.'
          }
        </p>
        <div>
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 })
            }}
          >
            Increase!
          </button>
        </div>
        <div>
          <span>Count: {this.state.count}</span>
        </div>
        {/* this is how you can prevent re-renders: */}
        <BigListPureComponent style={bigListStyle} />
        {/* <BigListPureComponent style={{ width: "100%" }} /> */}
        <BigListPureComponent />
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Main />, rootElement)
