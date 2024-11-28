import React, { useEffect, useState } from "react";
import { getMyWorkouts, addWorkout } from "../utils/api";
import WorkoutCard from "../components/WorkoutCard";
import AddWorkoutModal from "../components/AddWorkoutModal";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const data = await getMyWorkouts(token);
      setWorkouts(data);
    } catch (err) {
      console.error("Failed to fetch workouts", err);
    }
  };

  const handleAddWorkout = async (workout) => {
    try {
      await addWorkout(workout, token);
      fetchWorkouts();
      setShowModal(false);
    } catch (err) {
      console.error("Failed to add workout", err);
    }
  };

  return (
    <div>
      <h1>Your Workouts</h1>
      <button id="addWorkout" onClick={() => setShowModal(true)}>
        Add Workout
      </button>
      {showModal && (
        <AddWorkoutModal onClose={() => setShowModal(false)} onAddWorkout={handleAddWorkout} />
      )}
      <div>
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}

export default Workouts;
