import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrementCount}> - </button>
        <button onClick={() => this.props.incrementCount(5)}> + </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    count: store.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: (amountToIncrement) => {
      dispatch({ type: 'INCREMENT_COUNT', amount: amountToIncrement })
    },
    decrementCount: () => {
      dispatch({ type: 'DECREMENT_COUNT', amount: 1 })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
