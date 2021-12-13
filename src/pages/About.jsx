import React, { useState, useEffect } from 'react';
import Particle from '../components/Particles';
import { useSpring, animated } from 'react-spring';
import { css } from "@emotion/react";
import Navbar from '../components/Navbar';
import '../components/css/Main.css';
import '../components/css/About.css';

const About = () => {
    const [loading, setLoading] = useState(false);
    const props = useSpring({ config: {duration:200}, from: { opacity: 0 }, opacity: 1, delay: 100 });

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <>
            {/* <Particle /> */}
            <Navbar />
            <animated.div className='mainAbout' style={props}>
                <div className='aboutDiv'>
                    <h2>***Profile Card***</h2>
                    <h2>Education</h2>
                    <h2>Skills</h2>
                    <h2>Resume</h2>
                </div>
            </animated.div>

        </>
    );
}

export default About;
