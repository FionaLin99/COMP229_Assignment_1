import React from 'react';
import web from './assets/Web-Development.jpg';
import mobile from './assets/mobile-app-development.png';
import uiux from './assets/UX-UI.jpg'; 
import './Services.css';
const Services = () => {
    return (
        <div className="services">
            <h1>My Services</h1>
                    <img src={web} alt="Web Development" />
                    <h2>Web Development</h2>
                    <img src={mobile} alt="Mobile App Development" />
                    <h2>Mobile App Development</h2>
                    <img src={uiux} alt="UI/UX Design" />
                    <h2>UI/UX Design</h2>
        </div>
    );
}

export default Services;
