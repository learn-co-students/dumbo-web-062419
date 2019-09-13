import React, { Component } from 'react'
import logo from "./logo.svg";
import { connect } from 'react-redux'

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

const mapStateToProps = (store) => {
  // console.log('redux store: ', store)
  return {
    count: store.count
  }
}

//
// const mapDispatchToProps = (dispatch) => {
//   // console.log('dispatch: ', dispatch)
//
//   return {
//     incrementCount: () => {
//       dispatch({ type: "INCREMENT_COUNT", amount: 1 })
//     }
//   }
// }

export default connect(mapStateToProps, null)(Header)
