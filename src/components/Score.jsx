import React from "react";

function Score(props) {
  return (
    <div className="Score">
      <h3>Score: {props.score.score}</h3>
      <h3>Date: {props.score.date}</h3>
    </div>
  );
}

export default Score;
