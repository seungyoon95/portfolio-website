import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import { useSpring, animated } from 'react-spring';
import { css } from "@emotion/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/css/Main.css';
import '../components/css/About.css';
import Avatar from '../images/Icon/Avatar.png';

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
                    {/* <div class="backgroundImg"></div>  */}
                    <div className="profileCard">
                            <div className='profileLeft'>
                                <img src={Avatar} className="avatar" />
                            </div>
                            <div className='profileRight'>
                                <h2 className="profileName">Seungyoon (Jack) Lee</h2>
                                <h3>I'm a full-stack / software developer from Vancouver, BC.</h3>
                                <h3>As a recent graduate of BCIT CST, </h3>
                            </div>
                            
                    </div>

                    <div className='Education'>
                        <Collapsible classParentString='collapseEduc' trigger="Education">
                            <h3>Bachelor of Technology - Network Security Development, BCIT (January 2021 - December 2022)</h3>
                            <h3>Diploma - Computer Systems Technology, BCIT (January 2020 - December 2021)</h3>
                        </Collapsible>
                        
                    </div>

                    <div className='Skills'>
                        <Collapsible classParentString='collapseSkills' trigger="Skills">
                            <h3>Java</h3>
                        </Collapsible>
                    </div>

                    <div className='Resume'>
                        <Collapsible classParentString='collapseResume' trigger="Resume">
                            <h3>Download here</h3>
                        </Collapsible>
                    </div>
                </div>
                <Footer />
            </animated.div>

        </>
    );
}

export default About;
