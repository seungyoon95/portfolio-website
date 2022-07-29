import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { useSpring, animated } from 'react-spring';
import Accordion from 'react-bootstrap/Accordion';
import { css } from "@emotion/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/css/Main.css';
import '../components/css/About.css';
import Avatar from '../images/Icon/Avatar.png';
import Resume from '../Files/Resume.pdf';

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
            <Navbar />
            <animated.div className='mainAbout' style={props}>
                <div className='aboutDiv'>
                    <div className="profileCard">
                            <div className='profileLeft'>
                                <img src={Avatar} className="avatar" />
                            </div>
                            <div className='profileRight'>
                                <h2 className="profileName">Seungyoon (Jack) Lee</h2>
                                <h3> 
                                    &nbsp;I'm a full-stack / software developer from Vancouver, recently graduated
                                    from Computer Systems Technology @ BCIT in December 2021.
                                </h3>
                                <br />
                                <h3>&nbsp;Some of the main things I've learned throughout my education are:</h3>
                                <br />
                                <ul>
                                    <li>&nbsp;Object-Oriented Programming</li>
                                    <li>&nbsp;Procedural Programming</li>
                                    <li>&nbsp;Predictive Machine Learning / Big Data Analytics</li>
                                    <li>&nbsp;Data Structures / Algorithms</li>
                                    <li>&nbsp;Relational Database</li>
                                    <li>&nbsp;Web / Mobile Development</li>
                                    <li>&nbsp;Operating Systems / Computer Architecture</li>
                                </ul>
                                <br />
                                <h3>
                                    &nbsp;I will be continuing my studies on Network Security Applications Development, 
                                    but I'm also actively searching for job opportunities as I will be taking courses
                                    part-time.
                                </h3>
                                <br />
                                <h3>
                                    &nbsp;If there's anything else you might want to know, please feel free to contact 
                                    me on <a href="https://www.linkedin.com/in/seungyoon95/"> LinkedIn</a> or 
                                    by <NavLink to="/contact">email</NavLink>!
                                </h3>
                            </div>
                            
                    </div>

                    <Accordion defaultActiveKey='1' className="Collapsible">
                        <Accordion.Item eventKey="0" className="Education">
                            <Accordion.Header className="collapseHeader">Education</Accordion.Header>
                            <Accordion.Body>
                                <p>January 2021 - December 2022 (Expected)</p>
                                <h3>Bachelor of Technology - Network Security Applications Development (Part-Time), BCIT</h3>
                                <p>January 2020 - December 2021</p>
                                <h3>Diploma - Computer Systems Technology (Predictive Anayltics Option), BCIT</h3>
                                <p>April 2016 - April 2017</p>
                                <h3>Certificate - Audio Production Techniques, Musitechnic</h3>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="Skills">
                            <Accordion.Header className="collapseHeader">Skills</Accordion.Header>
                            <Accordion.Body>
                                <div className='SkillsFlex'>
                                <div className="Language">
                                    <h3 className="skillTitle">Language</h3>
                                    <ul>
                                        <li>English</li>
                                        <li>Korean</li>
                                    </ul>
                                </div>
                                <div className="ProgrammingLanguage">
                                    <h3 className="skillTitle">Technologies</h3>
                                    <ul>
                                        <li>Java</li>
                                        <li>Python</li>
                                        <li>JavaScript</li>
                                        <li>NodeJS / ExpressJS</li>
                                        <li>ReactJS</li>
                                        <li>SQL</li>
                                        {/* <li>C</li> */}
                                        <li>HTML / CSS</li>
                                        <li>Flutter</li>
                                        {/* <li>R</li> */}
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                                <div className="Misc">
                                    <h3 className="skillTitle">Misc</h3>
                                    <ul>
                                        <li>Windows / Mac / Linux</li>
                                        <li>Git / GitHub</li>
                                        <li>Agile Methodology</li>
                                    </ul>
                                </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="Resume">
                            <Accordion.Header className="collapseHeader">Resume</Accordion.Header>
                            <Accordion.Body>
                                <h3>Download <a href={Resume}>here</a></h3>
                                <p>Last Updated: Mar 20th, 2021</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="Hobby">
                            <Accordion.Header className="collapseHeader">Hobbies</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Listening to music</li>
                                    <li>Playing guitar</li>
                                    <li>Soccer</li>
                                    <li>Weightlifting</li>
                                    <li>Video games</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
                <Footer />
            </animated.div>

        </>
    );
}

export default About;
