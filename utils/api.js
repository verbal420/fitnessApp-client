import axios from "axios";

const API_BASE = "https://fitnessapp-api-ln8u.onrender.com";

export const loginUser = async (email, password) =>
  await axios.post(`${API_BASE}/login`, { email, password });

export const registerUser = async (email, password) =>
  await axios.post(`${API_BASE}/register`, { email, password });

export const getMyWorkouts = async (token) =>
  await axios.get(`${API_BASE}/getMyWorkouts`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (workout, token) =>
  await axios.post(`${API_BASE}/addWorkout`, workout, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateWorkout = async (id, workout, token) =>
  await axios.patch(`${API_BASE}/updateWorkout/${id}`, workout, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteWorkout = async (id, token) =>
  await axios.delete(`${API_BASE}/deleteWorkout/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const completeWorkoutStatus = async (id, token) =>
  await axios.post(`${API_BASE}/completeWorkoutStatus/${id}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
