import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';  
import About from '../src/About';       
import Projects from '../src/Projects'; 
import Services from '../src/Services'; 
import Contact from '../src/Contact';   
import Layout from '../components/Layout';
import '../src/App.css';


const App = () => {
    return (
        
        <Router>
            <div className="App">
                <Layout />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;









