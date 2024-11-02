import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Include your custom styles
import Register from './Register';
import Login from './Login';
import ResourceToolbox from './ResourceToolbox';

function App() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('events');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // To check if user is logged in

  // Function to handle successful login or registration
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="container mt-4">
      <div className="bg-light p-4 rounded mb-4">
        <h2>Welcome to YouthConnect</h2>
        <p>Connect, collaborate, and create positive change in your community</p>
      </div>

      {/* User Registration and Login */}
      {!isAuthenticated ? (
        <div className="mb-4">
          <div className="mb-3">
            <h4>Register</h4>
            <Register onAuthSuccess={handleAuthSuccess} />
          </div>
          <div className="mb-3">
            <h4>Login</h4>
            <Login onAuthSuccess={handleAuthSuccess} />
          </div>
        </div>
      ) : (
        <>
          {/* Navigation Tabs */}
          <nav>
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'events' ? 'active' : ''}`}
                  onClick={() => setActiveTab('events')}
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'resources' ? 'active' : ''}`}
                  onClick={() => setActiveTab('resources')}
                >
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'services' ? 'active' : ''}`}
                  onClick={() => setActiveTab('services')}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'network' ? 'active' : ''}`}
                  onClick={() => setActiveTab('network')}
                >
                  Network
                </a>
              </li>
            </ul>
          </nav>

          {/* Conditional Rendering Based on Active Tab */}
          {activeTab === 'events' && (
            <div id="events" className="mb-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Youth Leadership Workshop</h5>
                  <p className="card-text">
                    <span role="img" aria-label="calendar">📅</span> 2024-10-25<br />
                    <span role="img" aria-label="attendees">👥</span> 45 attendees
                  </p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Climate Action Summit</h5>
                  <p className="card-text">
                    <span role="img" aria-label="calendar">📅</span> 2024-10-28<br />
                    <span role="img" aria-label="attendees">👥</span> 120 attendees
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div id="resources" className="mb-4">
              <ResourceToolbox />
            </div>
          )}

          {activeTab === 'services' && (
            <div id="services" className="mb-4">
              <p>Service content goes here.</p>
            </div>
          )}

          {activeTab === 'network' && (
            <div id="network" className="mb-4">
              <p>Network content goes here.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
