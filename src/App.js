import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import AuthForm from './components/AuthForm';
import WorkoutList from './components/WorkoutList';
import AddWorkoutModal from './components/AddWorkoutModal';
import { login, register, getWorkouts, addWorkout } from './services/api';
import Navbar from './components/Navbar';

const App = () => {
  const { auth, login: setLogin, logout } = useAuth();
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch workouts after successful login
  useEffect(() => {
    if (auth.token) {
      getWorkouts(auth.token).then(setWorkouts);
    }
  }, [auth.token]);

  const handleLogin = async ({ email, password }) => {
    const user = await login(email, password);
    setLogin(user.token, user.user);
  };

  const handleRegister = async ({ email, password }) => {
    const user = await register(email, password);
    setLogin(user.token, user.user);
  };

  const handleAddWorkout = async (workout) => {
    const newWorkout = await addWorkout(auth.token, workout);
    setWorkouts((prev) => [...prev, newWorkout]);
  };

  const handleLogout = () => {
    logout();
    setWorkouts([]);
  };

  return (
    <div>
      {/* Render Navbar if the user is logged in */}
      {auth.token && <Navbar onLogout={handleLogout} />}

      {!auth.token ? (
        <>
          <AuthForm type="login" onSubmit={handleLogin} />
          <AuthForm type="register" onSubmit={handleRegister} />
        </>
      ) : (
        <>
          <button onClick={() => setShowModal(true)}>Add Workout</button>
          <WorkoutList workouts={workouts} />
          {showModal && (
            <AddWorkoutModal
              onClose={() => setShowModal(false)}
              onAddWorkout={handleAddWorkout}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
