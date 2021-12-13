import React, { useState, useEffect } from 'react';
import Particle from '../components/Particles';
import Navbar from '../components/Navbar';
import '../components/css/Main.css';
import '../components/css/About.css';

const About = () => {
    
    return (
        <>
            {/* <Particle /> */}
            <Navbar />
            <div className='mainAbout'>
                <div className='aboutDiv'>About Page</div>
            </div>

        </>
    );
}

export default About;
