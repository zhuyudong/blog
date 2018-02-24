import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Counter extends Component {
  state = {
    counter: 0
  }

  increment = (e) => {
    e.preventDefault();
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement = (e) => {
    e.preventDefault();
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <div id="counter">{this.state.counter}</div>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

render(<Counter />, document.querySelector('#app'));