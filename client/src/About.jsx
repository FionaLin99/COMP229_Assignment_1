import React from 'react';
import './About.css';
import lin from './assets/Lin.jpg';
import resume from './assets/resume.pdf';

const About = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={lin} alt="CHIA-YI" />
            <p>
                Hi, I am CHIA-YI LIN, a passionate software engineer and the CEO of a thriving IT company. 
                With a rich background in app development, I am dedicated to leading my team in creating 
                cutting-edge technologies that drive progress and deliver impactful results.
            </p>
            <a href={resume} download>Download Resume</a>
        </div>
    );
}

export default About;

