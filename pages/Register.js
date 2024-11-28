import React, { useState } from "react";
import { registerUser } from "../utils/api";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navigate("/login");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <AuthForm onSubmit={handleRegister} buttonText="Register" errorMessage={error} />
  );
}

export default Register;
