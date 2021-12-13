import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Particle from './components/Particles';
import ClockLoader from 'react-spinners/ClockLoader';
import { useSpring, animated } from 'react-spring';
import Navbar from './components/Navbar';
import { css } from "@emotion/react";
import './App.css';
import Showcase from './components/Showcase';


const App = () => {
    const [loading, setLoading] = useState(false);
    const props = useSpring({ config: {duration:3000}, from: { opacity: 0 }, opacity: 1, delay: 100 });

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
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
            <Particle />
            <Navbar />
            <div className="main">
                <Showcase />
            </div>

            </animated.div>
            }
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
