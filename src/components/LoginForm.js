import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles.css'; // assuming common CSS here

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/'); // redirect to dashboard or main page
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container login-container">
      <h1 className="title">Welcome Back</h1>
      <p className="description">Please sign in to continue</p>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value.toLowerCase())}
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="error-msg">{error}</p>}
        <button type="submit" className="btn-submit">Sign In</button>
      </form>
      <p className="alternate">
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}
