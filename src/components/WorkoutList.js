import React from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutList = ({ workouts }) => {
  return (
    <div className="workouts-grid">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutList;
