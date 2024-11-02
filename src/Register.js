import React, { useState } from 'react';
import { auth } from './firebase'; // Import the Firebase auth service
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import the createUserWithEmailAndPassword function

function Register({ onAuthSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password) // Updated for the modular syntax
      .then((userCredential) => {
        console.log('User registered:', userCredential.user);
        setError('');
        onAuthSuccess(); // Notify parent component that registration was successful
      })
      .catch((error) => {
        console.error('Error registering user:', error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Register;
