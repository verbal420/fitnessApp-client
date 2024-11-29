import React, { useState } from 'react';

const AddWorkoutModal = ({ onClose, onAddWorkout }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWorkout({ name, duration });
    onClose(); // Close the modal after adding the workout
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Workout</h2>
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
            placeholder="Duration (e.g., 30 mins)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
          <button type="submit">Add Workout</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddWorkoutModal;
