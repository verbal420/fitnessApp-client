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
      <form onSubmit={handleSubmit}>
        <h2>Add Workout</h2>
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
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddWorkoutModal;
