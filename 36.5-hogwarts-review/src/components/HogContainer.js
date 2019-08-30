import React, { Component } from "react";
import Hog from "./Hog.js";

class HogContainer extends Component {
  render() {
    const allHogs = this.props.allHogs.map(hog => {
      return <Hog key={hog.name} hog={hog} />;
    });
    return <div className="ui grid container">{allHogs}</div>;
  }
}

export default HogContainer;
