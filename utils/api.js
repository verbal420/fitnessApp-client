const API_BASE = process.env.REACT_APP_API_BASE;

// Helper function to make HTTP requests
async function apiRequest(endpoint, method = "GET", body = null, token = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) headers["Authorization"] = `Bearer ${token}`;

  const options = {
    method,
    headers,
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${API_BASE}${endpoint}`, options);

  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

  return response.json();
}

// API methods
export const loginUser = (email, password) =>
  apiRequest("/login", "POST", { email, password });

export const registerUser = (email, password) =>
  apiRequest("/register", "POST", { email, password });

export const getMyWorkouts = (token) =>
  apiRequest("/getMyWorkouts", "GET", null, token);

export const addWorkout = (workout, token) =>
  apiRequest("/addWorkout", "POST", workout, token);

export const deleteWorkout = (id, token) =>
  apiRequest(`/deleteWorkout/${id}`, "DELETE", null, token);

export const completeWorkoutStatus = (id, token) =>
  apiRequest(`/completeWorkoutStatus/${id}`, "POST", null, token);
