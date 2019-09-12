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
      return { count: state.count + action.amount }

    case "DECREMENT_COUNT":
      return { count: state.count - action.amount }

    default:
      return state
  }
}

const store = createStore(reducer)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count + upToNext}`;
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
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  increment = () => {
    store.dispatch({ type: 'INCREMENT_COUNT', amount: 1 })
    // this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    store.dispatch({ type: 'DECREMENT_COUNT', amount: 1 })
    // this.setState({ count: this.state.count - 1 });
  };


  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
