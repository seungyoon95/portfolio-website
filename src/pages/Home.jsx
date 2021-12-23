import React, { useState, useEffect } from 'react';
// import Particle from '../components/Particles';
import ClockLoader from 'react-spinners/ClockLoader';
import { useSpring, animated } from 'react-spring';
import Navbar from '../components/Navbar';
import { css } from "@emotion/react";
import Showcase from '../components/Showcase';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import '../components/css/Main.css';
import '../components/css/Home.css';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const props = useSpring({ config: {duration:2000}, from: { opacity: 0 }, opacity: 1, delay: 100 });

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
            {
            loading ?
            <div className="loader"> 
            <ClockLoader
            css={override}
            size={300}
            color={"white"}
            loading={loading}
            />
            </div>
            : 

            <animated.div className="App" style={props}>
                <Navbar />
                <div className="mainHome"> 
                    <Showcase className="showcase" />
                    {/* <hr /> */}
                    {/* <div className="home_cards">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                            <Card.Text>
                                yo 1
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                            <Card.Text>
                                yo 2 
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                            <Card.Text>
                                yo 3
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> */}
                </div>
                <Footer />
            </animated.div>

            }
        </>
    );
}

export default Home;
