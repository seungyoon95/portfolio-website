import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSpring, animated } from 'react-spring';
import { css } from "@emotion/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/css/Main.css';
import '../components/css/Projects.css';

// Evanescent images
import image_evanescent_Home from '../images/projects/Evanescent/Evanescent_Home.png';
import image_evanescent_Landing1 from '../images/projects/Evanescent/Evanescent_Landing1.png';
import image_evanescent_Landing2 from '../images/projects/Evanescent/Evanescent_Landing2.png';
import image_evanescent_SignUp from '../images/projects/Evanescent/Evanescent_SignUp.png';
import image_evanescent_SignIn from '../images/projects/Evanescent/Evanescent_SignIn.png';
import image_evanescent_Profile from '../images/projects/Evanescent/Evanescent_Profile.png';
import image_evanescent_Search from '../images/projects/Evanescent/Evanescent_Search.png';
import image_evanescent_ItemDetails from '../images/projects/Evanescent/Evanescent_ItemDetails.png';
import image_evanescent_Portfolio from '../images/projects/Evanescent/Evanescent_Portfolio.png';

const Projects = () => {
    const [loading, setLoading] = useState(false);
    const props = useSpring({ config: { duration: 200 }, from: { opacity: 0 }, opacity: 1, delay: 100 });
    const [showEvanescent, setShowEvanescent] = useState(false);

    // const override = css`
    // display: block;
    // margin: 0 auto;
    // border-color: red;
    // `;

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
            <animated.div className='mainProjects' style={props}>
                <h2 className='projectTitle'>Projects (Work In Progress!)</h2>
                <div className='projectsDiv'>
                    <div className='projectsLeft'>
                        <div className="div_project">
                            <div className="project_description">
                                <h2 className="project_title">QuickChat</h2>
                                <div className="project_year">
                                    <h3>2022</h3>
                                </div>
                            </div>

                            <div className="div_projectButton">
                                <Button className="button_project" variant="outline-dark" onClick={() => setShowEvanescent(true)}>More Info</Button>{' '}

                                <Modal
                                    size="lg"
                                    show={showEvanescent}
                                    onHide={() => setShowEvanescent(false)}
                                    dialogClassName="modal-90w"
                                    aria-labelledby="example-custom-modal-styling-title"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                            Evanescent
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>Pop-Up Store!</p>
                                        <Carousel variant="light" className="carousel_project">
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image_evanescent_Home}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image_evanescent_Landing1}
                                                    alt="Second slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image_evanescent_Landing2}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image_evanescent_SignUp}
                                                    alt="Fourth slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image_evanescent_SignIn}
                                                    alt="Fifth slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image_evanescent_Profile}
                                                    alt="Sixth slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image_evanescent_Search}
                                                    alt="Seventh slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image_evanescent_ItemDetails}
                                                    alt="Eighth slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image_evanescent_Portfolio}
                                                    alt="Ninth slide"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Modal.Body>
                                </Modal>

                            </div>

                            <div className="div_project">
                                <div className="project_description">
                                    <h2 className="project_title">Evanescent</h2>
                                    <div className="project_year">
                                        <h3>2021</h3>
                                    </div>
                                </div>

                                <div className="div_projectButton">
                                    <Button className="button_project" variant="outline-dark" onClick={() => setShowEvanescent(true)}>More Info</Button>{' '}

                                    <Modal
                                        size="lg"
                                        show={showEvanescent}
                                        onHide={() => setShowEvanescent(false)}
                                        dialogClassName="modal-90w"
                                        aria-labelledby="example-custom-modal-styling-title"
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                Evanescent
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>Pop-Up Store!</p>
                                            <Carousel variant="light" className="carousel_project">
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={image_evanescent_Home}
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={image_evanescent_Landing1}
                                                        alt="Second slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={image_evanescent_Landing2}
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={image_evanescent_SignUp}
                                                        alt="Fourth slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={image_evanescent_SignIn}
                                                        alt="Fifth slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={image_evanescent_Profile}
                                                        alt="Sixth slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={image_evanescent_Search}
                                                        alt="Seventh slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={image_evanescent_ItemDetails}
                                                        alt="Eighth slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={image_evanescent_Portfolio}
                                                        alt="Ninth slide"
                                                    />
                                                </Carousel.Item>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='projectsRight'>
                    </div>

                </div>

            </animated.div>
            <Footer />

        </>
    );
}

export default Projects;
