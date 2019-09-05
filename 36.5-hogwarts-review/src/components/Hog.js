import React, { Component } from "react";

class Hog extends Component {
  state = {
    showInfo: false
  };

  getImg = () => {
    const name = this.props.hog.name
      .split(" ")
      .join("_")
      .toLowerCase();
    const img = require(`../hog-imgs/${name}.jpg`);

    return img;
  };

  showHogInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    return (
      <div className="ui eight wide column">
        <h1>{this.props.hog.name}</h1>
        <img src={this.getImg()} alt="" onClick={this.showHogInfo} />
        {this.state.showInfo ? (
          <div>
            <div>Specialty: {this.props.hog.specialty} </div>
            <div>Greased: {this.props.hog.greased ? "Yes" : "No"} </div>
            <div>Weight: {this.props.hog.weight} </div>
            <div>Highest Medal: {this.props.hog["highest medal achieved"]}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Hog;
