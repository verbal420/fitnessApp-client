import React, { useState } from 'react';

const AuthForm = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="auth-form">
      <h1>{type === 'login' ? 'Login' : 'Register'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
};

export default AuthForm;