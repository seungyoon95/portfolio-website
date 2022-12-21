import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/css/Main.css';
import '../components/css/Contact.css';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const props = useSpring({ config: { duration: 200 }, from: { opacity: 0 }, opacity: 1, delay: 100 });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_24dq6pg', 'template_maialj4', form.current, 'kY8L0PjMnzp1ApiRb')
            .then((result) => {
                console.log(result.text);
                alert("Email sent!");
                window.location.reload();
            }, (error) => {
                console.log(error.text);
                alert("Error, please try again later!");
                window.location.reload();
            });
    };

    return (
        <>
            {/* <Particle /> */}
            <Navbar />
            <animated.div className='mainContact' style={props}>
                <h2 className='contactTitle'>Contact</h2>
                <div className='contactDiv'>
                    <div className='contactLeft'>
                        <div className='contactLeftTitle'><h3>Social Media</h3></div>
                        {/* <a href='https://www.facebook.com/dhy02041/' target="_blank"><i class="fab fa-facebook-square fa-4x"></i></a>
                        <a href='https://www.instagram.com/seungyoon1/' target="_blank"><i class="fab fa-instagram-square fa-4x"></i></a>
                        <a href='https://www.youtube.com/channel/UC-BbVGi8JWK6Kb7xthRyPig' target="_blank"><i class="fab fa-youtube-square fa-4x"></i></a> */}
                        <a href='https://www.linkedin.com/in/seungyoon95/' target="_blank"><i class="fab fa-linkedin fa-4x"></i></a>
                        <a href='https://github.com/seungyoon95' target="_blank"><i class="fab fa-github-square fa-4x"></i></a>
                    </div>
                    <div className='contactRight'>
                        <h3 className='contactRightTitle'>Email Me!</h3>

                        <form ref={form} onSubmit={sendEmail}>
                            <div class="form-floating">
                                <label for="name" id="label">Name</label>
                                <input type="user_name" class="form-control" id="name" name="user_name" />
                            </div>

                            <div class="form-floating">
                                <label for="email" id="label">Email Address</label>
                                <input type="email" class="form-control" id="email" name="user_email" />
                            </div>

                            <div class="form-floating">
                                <label for="message" id="label">Message</label>
                                <textarea class="form-control" id="message" name="message"></textarea>
                            </div>

                            <input className="button_submit" type="submit" value="Send" disabled />
                                
                            <p>Button is currently disabled due to spams, please try again later.</p>

                            <p class="card-text" id="updateText"><small class="text-muted"></small></p>
                        </form>

                    </div>
                </div>

            </animated.div>
            <Footer />
        </>
    );
}

export default Contact;
