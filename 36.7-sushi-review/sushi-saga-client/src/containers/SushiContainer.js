import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  const sushiComponents = props.allSushi.map(sushi => {
    return <Sushi sushi={sushi} eatSushi={props.eatSushi} key={sushi.id} />;
  });
  return (
    <Fragment>
      <div className="belt">
        {sushiComponents}
        <MoreButton nextFour={props.nextFour} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
