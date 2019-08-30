import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    allHogs: [],
    onlyGreased: false,
    sortByName: false,
    sortByWeight: false
  };

  componentDidMount() {
    this.setState({ allHogs: hogs });
  }

  filterByGrease = () => {
    this.setState({ onlyGreased: !this.state.onlyGreased });
  };

  sortByName = () => {
    this.setState({ sortByName: !this.state.sortByName, sortByWeight: false });
  };

  sortByWeight = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight,
      sortByName: false
    });
  };

  render() {
    console.log(this.state);
    let filteredHogs = [...this.state.allHogs];
    if (this.state.onlyGreased) {
      filteredHogs = filteredHogs.filter(hog => {
        return hog.greased === true;
      });
    }

    if (this.state.sortByName) {
      filteredHogs = filteredHogs.sort((hogA, hogB) => {
        return hogA.name.localeCompare(hogB.name);
      });
    }

    if (this.state.sortByWeight) {
      filteredHogs = filteredHogs.sort((hogA, hogB) => {
        return hogB.weight - hogA.weight;
      });
    }
    return (
      <div className="App">
        <Nav
          filterByGrease={this.filterByGrease}
          sortByName={this.sortByName}
          sortByWeight={this.sortByWeight}
        />
        <HogContainer allHogs={filteredHogs} />
      </div>
    );
  }
}

export default App;
