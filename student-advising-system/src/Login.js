// Login.js

import React, { useState } from 'react';
import './Login.css';
import UTAImage from './UTA.JPG';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Login attempt with email: ${email} and password: ${password}`);
    // Handle the login logic
  };

  return (
    <div className="login-page">
      <div className="image-container">
        <img src={UTAImage} alt="University of Texas at Arlington" />
      </div>
      <div className="login-container">
        <h2>Student Advising System Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label1 htmlFor="password">Password</label1>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label2 htmlFor="remember-me">Remember me</label2>
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
