
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <img src={icon} alt={title} className="service-card-icon" />
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
