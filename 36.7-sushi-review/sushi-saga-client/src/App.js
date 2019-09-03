import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushi: [],
    index: 0,
    balance: 50
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiData => {
        const sushiArray = sushiData.map(sushi => {
          return { ...sushi, eaten: false };
        });
        this.setState({ allSushi: sushiArray });
      });
  }

  eatSushi = eatenSushi => {
    if (this.state.balance - eatenSushi.price < 0) {
      alert("You're Broke");
      return;
    }
    if (eatenSushi.eaten) {
      alert("Stop");
      return;
    }
    const sushiArray = this.state.allSushi.map(sushi => {
      if (sushi.id === eatenSushi.id) {
        sushi.eaten = true;
        return sushi;
      } else {
        return sushi;
      }
    });
    this.setState({
      allSushi: sushiArray,
      balance: this.state.balance - eatenSushi.price
    });
  };

  nextFour = () => {
    this.setState({ index: this.state.index + 4 });
  };

  render() {
    const fourSushi = this.state.allSushi.slice(
      this.state.index,
      this.state.index + 4
    );

    const eatenSushi = this.state.allSushi.filter(sushi => {
      return sushi.eaten;
    });
    console.log(eatenSushi);
    return (
      <div className="app">
        <SushiContainer
          allSushi={fourSushi}
          eatSushi={this.eatSushi}
          nextFour={this.nextFour}
        />
        <Table balance={this.state.balance} eatenSushi={eatenSushi} />
      </div>
    );
  }
}

export default App;
