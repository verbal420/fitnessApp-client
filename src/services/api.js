const API_URL = process.env.REACT_APP_API_URL || 'https://fitnessapp-api-ln8u.onrender.com';

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};

export const register = async (email, password) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};

export const getWorkouts = async (token) => {
  const response = await fetch(`${API_URL}/workouts/getMyWorkouts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
};

export const addWorkout = async (token, workout) => {
  const response = await fetch(`${API_URL}/workouts/addWorkout`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify(workout),
  });
  return await response.json();
};
