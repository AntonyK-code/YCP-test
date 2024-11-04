import React, { useState, useEffect } from 'react';
import './WelcomePage.css';

function WelcomePage() {
  const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || 'Events');
  const [searchTerm, setSearchTerm] = useState('');
  const [registrationCounts, setRegistrationCounts] = useState({ "Youth Leadership Workshop": 45, "Climate Action Summit": 120 });

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const handleRegisterClick = (eventName) => {
    setRegistrationCounts((prevCounts) => ({
      ...prevCounts,
      [eventName]: (prevCounts[eventName] || 0) + 1,
    }));
    alert(`You have registered for ${eventName}!`);
  };

  const filteredContent = (content) => {
    return content.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Events':
        const events = [
          { name: "Youth Leadership Workshop", date: "2024-10-25", attendees: registrationCounts["Youth Leadership Workshop"] },
          { name: "Climate Action Summit", date: "2024-10-28", attendees: registrationCounts["Climate Action Summit"] }
        ];
        return (
          <div className="card-container">
            {filteredContent(events).map(event => (
              <div className="card" key={event.name}>
                <h3>{event.name}</h3>
                <p>Date: {event.date}</p>
                <p>Attendees: {event.attendees}</p>
                <button className="register-button" onClick={() => handleRegisterClick(event.name)}>
                  Register
                </button>
              </div>
            ))}
          </div>
        );
      case 'Resources':
        const resources = [
          { name: "Climate Action Toolkit", description: "Guides, templates, and tools to support climate action initiatives." },
          { name: "Community Organizing Guide", description: "Comprehensive guide for organizing community-based events and actions." }
        ];
        return (
          <div className="card-container">
            {filteredContent(resources).map(resource => (
              <div className="card" key={resource.name}>
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
              </div>
            ))}
          </div>
        );
      case 'Services':
        const services = [
          { name: "Mentorship Programs", description: "Connect with mentors for career guidance and support." },
          { name: "Job and Internship Placement", description: "Find opportunities to kickstart your career." },
          { name: "Health and Wellness Services", description: "Access health and wellness resources and support services." }
        ];
        return (
          <div className="card-container">
            {filteredContent(services).map(service => (
              <div className="card" key={service.name}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        );
      case 'Network':
        const network = [
          { name: "Local Youth Groups", description: "Connect with youth groups in your area working on similar causes." },
          { name: "International Partnerships", description: "Explore partnership opportunities with organizations worldwide." },
          { name: "Alumni Network", description: "Stay connected with former members for knowledge sharing and support." }
        ];
        return (
          <div className="card-container">
            {filteredContent(network).map(net => (
              <div className="card" key={net.name}>
                <h3>{net.name}</h3>
                <p>{net.description}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="welcome-page">
      <h1 className="main-title">Welcome to YouthConnect</h1>
      <p className="sub-title">Connect, collaborate, and create positive change in your community</p>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="tabs">
        <button className={activeTab === 'Events' ? 'active' : ''} onClick={() => setActiveTab('Events')}>
          Events
        </button>
        <button className={activeTab === 'Resources' ? 'active' : ''} onClick={() => setActiveTab('Resources')}>
          Resources
        </button>
        <button className={activeTab === 'Services' ? 'active' : ''} onClick={() => setActiveTab('Services')}>
          Services
        </button>
        <button className={activeTab === 'Network' ? 'active' : ''} onClick={() => setActiveTab('Network')}>
          Network
        </button>
      </div>

      {renderContent()}
    </div>
  );
}

export default WelcomePage;
