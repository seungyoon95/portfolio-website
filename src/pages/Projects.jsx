import React, { useState, useEffect } from 'react';
import Particle from '../components/Particles';
import Navbar from '../components/Navbar';
import '../components/css/Main.css';
import '../components/css/Projects.css';


const Projects = () => {

    return (
        <>
            {/* <Particle /> */}
            <Navbar />
            <div className='mainProjects'>
                <div className='projectsDiv'>Projects Page</div>
            </div>

        </>
    );
}

export default Projects;
