import React from "react";

const PuzzleContainer = props => {
  return <div className="puzzle-container" id={props.id} style={{backgroundColor: props.color}}></div>;
};

export default PuzzleContainer;
