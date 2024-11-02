import React, { useState } from 'react';
import { auth } from './firebase'; // Import the Firebase auth service
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the signInWithEmailAndPassword function

function Login({ onAuthSuccess }) {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for handling errors

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
        setError(''); // Clear any previous errors
        onAuthSuccess(); // Notify parent component that login was successful
      })
      .catch((error) => {
        console.error('Error logging in:', error.message);
        setError(error.message); // Display error message to the user
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;

