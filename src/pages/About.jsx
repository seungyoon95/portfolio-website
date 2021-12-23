import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSpring, animated } from 'react-spring';
import { css } from "@emotion/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    {/* <h2>Education</h2>
                    <h2>Skills</h2>
                    <h2>Resume</h2> */}
                </div>
                <Footer />
            </animated.div>

        </>
    );
}

export default About;
