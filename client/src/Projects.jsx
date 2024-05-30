import React from 'react';
import finance from './assets/finance.jpg';
import smarthome from './assets/home-automation.jpg';
import onlineplatform from './assets/online-learning-platforms.jpg';
import './Projects.css';

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project">
                <img src={finance} alt="Personal Finance Manager" />
                <h2>Personal Finance Manager</h2>
                <p>A Personal Finance Manager is a desktop or mobile application designed to help individuals keep track of their income, expenses, and savings. The application allows users to input financial transactions, categorize them, and generate reports to visualize their financial health.</p>
            </div>
            <div className="project">
                <img src={smarthome} alt="Smart Home Automation System" />
                <h2>Smart Home Automation System</h2>
                <p>A Smart Home Automation System is an IoT-based project that allows users to control and monitor their home devices remotely. The system integrates various smart devices (e.g., lights, thermostats, security cameras) and provides a centralized interface for managing them.</p>
            </div>
            <div className="project">
                <img src={onlineplatform} alt="Online Learning Platform" />
                <h2>Online Learning Platform</h2>
                <p>An Online Learning Platform is a web application that facilitates virtual education by offering courses, quizzes, and interactive learning materials. It connects educators with students and provides tools to manage and deliver educational content.</p>
            </div>
        </div>
    );
}

export default Projects;

 