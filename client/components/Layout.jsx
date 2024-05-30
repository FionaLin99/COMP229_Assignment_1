import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.jpg';

export default function Layout() {
 return (
    <header className='header'>
    <nav>
            <img src={logo} alt="Logo" className="logo"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
//  <>
//  <h1>My Portfolio</h1>
//  <nav>
//  <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
//  </nav>
//  <hr />
 
 
 
//  </>
 );
}
