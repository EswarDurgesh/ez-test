
import React from 'react';
import ServiceCard from './ServiceCard';
import Form from './Form';
import './Home.css';
import logo from '../assets/logo.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';

const services = [
  { icon: icon1, title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
  { icon: icon2, title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit'},
  { icon: icon3, title: 'Translation Services', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
  { icon: icon4, title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
  { icon: icon5, title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
  { icon: icon6, title: 'Data Processing', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-side">
        <header className="header">
          <div>
          <img src={logo} alt="EZ Works" className="logo" />
            <p className="subtitle">Suite Of Business Support Services</p>
          </div>
        </header>
        <div className="content">
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <Form />
        </div>
      </div>
      <div className="right-side">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
