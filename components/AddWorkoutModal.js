import React, { useState } from "react";

function AddWorkoutModal({ onClose, onAddWorkout }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWorkout({ name, duration });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Workout</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Workout Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
          <button type="submit">Add</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AddWorkoutModal;
