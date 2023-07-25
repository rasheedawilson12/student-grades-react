import React from "react";
import Score from "./Score";

function Students(props) {
  return (
    <div className="Students">
      <h1>{props.student.name}</h1>
      <p>{props.student.bio}</p>
      {props.student.scores.map((score) => {
        return <Score score={score} />;
      })}
    </div>
  );
}

export default Students;
