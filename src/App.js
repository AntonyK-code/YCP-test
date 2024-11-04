import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import Login from './Login';
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router basename="/Youth-Connect-Platform">
      <div className="container vh-100 d-flex align-items-center">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <WelcomePage />
              ) : (
                <div className="row w-100">
                  <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    {/* Add the CSS class 'main-title' here */}
                    <h1 className="main-title">Youth Connect Platform</h1>
                    <p className="description-text">
                      Welcome to the Youth Connect Platform, where young people can connect,
                      collaborate, and create positive change in their communities.
                    </p>
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center">
                    {showLogin ? (
                      <Login onAuthSuccess={handleAuthSuccess} />
                    ) : (
                      <Register onAuthSuccess={handleAuthSuccess} />
                    )}
                    <button className="btn btn-link mt-2" onClick={toggleForm}>
                      {showLogin ? "Create an account" : "I am already a member"}
                    </button>
                  </div>
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

