import React from "react";

function WorkoutCard({ workout }) {
  return (
    <div className="workout-card">
      <h3>{workout.name}</h3>
      <p>Duration: {workout.duration}</p>
      <p>Status: {workout.status ? "Completed" : "Incomplete"}</p>
    </div>
  );
}

export default WorkoutCard;
