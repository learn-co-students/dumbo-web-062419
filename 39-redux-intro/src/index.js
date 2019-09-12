import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from 'redux'

const reducer = (state={ count: 0 }, action) => {
  console.log("our reducer's state: ", state)
  console.log("our reducer's action: ", action)

  switch (action.type) {
    case "UPDATE_COUNT":
      return { count: action.count }

    case "INCREMENT_COUNT":
      return { count: state.count + 1 }

    case "DECREMENT_COUNT":
      return { count: state.count - 1 }

    default:
      return state
  }
}

const store = createStore(reducer)
debugger

class App extends Component {
  // state = {
  //   count: 0
  // }

  increment = () => {
    // this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <Header count={/*this.state.count*/null} />
        <Counter count={/*this.state.count*/null} increment={this.increment} decrement={this.decrement} />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
