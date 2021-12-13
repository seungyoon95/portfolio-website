import React, { useState, useEffect } from 'react';
import Particle from '../components/Particles';
import { useSpring, animated } from 'react-spring';
import { css } from "@emotion/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/css/Main.css';
import '../components/css/Contact.css';

const Contact = () => {
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
            <animated.div className='mainContact' style={props}>
            <h2 className='contactTitle'>Contact</h2>
                <div className='contactDiv'>
                    <div className='contactLeft'>
                        <div className='contactLeftTitle'><p>Social Media</p></div>
                        <a href='https://www.facebook.com/dhy02041/'><i class="fab fa-facebook-square fa-4x"></i></a>
                        <a href='https://www.instagram.com/seungyoon1/'><i class="fab fa-instagram-square fa-4x"></i></a>
                        <a href='https://www.youtube.com/channel/UC-BbVGi8JWK6Kb7xthRyPig'><i class="fab fa-youtube-square fa-4x"></i></a>
                        <a href='https://www.linkedin.com/in/seungyoon95/'><i class="fab fa-linkedin fa-4x"></i></a>
                        <a href='https://github.com/seungyoon95'><i class="fab fa-github-square fa-4x"></i></a>
                    </div>
                    <div className='contactRight'>
                        <p className='contactRightTitle'>Email</p>

                        {/* <form>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                <label for="Name">Name</label>
                            </div>

                            <div class="form-floating">
                                <input type="text" class="form-control" id="email" placeholder="Your Email" />
                                <label for="email">Email Address</label>
                            </div>

                            <div class="form-floating">
                                <textarea class="form-control" id="message" placeholder="Your Message"></textarea>
                                <label for="message">Message</label>
                            </div>

                            <button className="button_update">Submit</button>

                            <p class="card-text" id="updateText"><small class="text-muted"></small></p>
                        </form> */}

                    </div>
                </div>
            </animated.div>
        </>
    );
}

export default Contact;
