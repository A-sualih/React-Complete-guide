import React from 'react';
import './DonationCard.css';

const DonationCard = () => {
  const handleDonate = () => {
    // Add your donation logic here
    console.log('Donate button clicked');
    // You can redirect to payment page or open a modal
  };

  return (
    <div className="donation-card">
      <div className="card-container">
        <div className="card-header">
          <h1 className="card-title">Your Donations</h1>
          <p className="card-subtitle">
            The Mesque won established in 1954, and co-automated tempor 
            installation of sleeves at deliver image objects.
          </p>
        </div>
        
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '70%' }}></div>
          </div>
          <span className="progress-text">70%</span>
        </div>
        
        <div className="donation-content">
          <h2 className="donation-title">
            We need your donation for the
          </h2>
          <h2 className="donation-subtitle">
            restoration of the grand mosque
          </h2>
          
          <button className="donate-button" onClick={handleDonate}>
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;