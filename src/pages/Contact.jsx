import React, { useState, useEffect } from 'react';
import Particle from '../components/Particles';
import Navbar from '../components/Navbar';
import '../components/css/Main.css';
import '../components/css/Contact.css';

const Contact = () => {

    return (
        <>
            {/* <Particle /> */}
            <Navbar />
            <div className='mainContact'>
                <div className='contactDiv'>Contact Page</div>
            </div>

        </>
    );
}

export default Contact;
