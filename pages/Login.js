import React, { useState } from "react";
import { loginUser } from "../utils/api";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await loginUser(email, password);
      localStorage.setItem("token", response.token);
      navigate("/workouts");
    } catch {
      setError("Invalid credentials");
    }
  };

  return <AuthForm onSubmit={handleLogin} buttonText="Login" errorMessage={error} />;
}

export default Login;
