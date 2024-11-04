import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

function Login({ onAuthSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onAuthSuccess();
      alert("Login successful!");
    } catch (error) {
      setError("Incorrect email or password.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <div className="input-group">
        <span className="icon">✉️</span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <span className="icon">🔒</span>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-danger">{error}</p>}

      <button type="submit" className="login-button">Login</button>
    </form>
  );
}

export default Login;
