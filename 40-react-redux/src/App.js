import React, { Component } from 'react'
import "./App.css";
import Header from './Header'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header greeting="yo"/>
        <Counter />
      </div>
    );
  }
}

export default App
