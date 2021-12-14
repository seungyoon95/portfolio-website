import React, { useState, useEffect } from 'react';
import Particle from '../components/Particles';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useSpring, animated } from 'react-spring';
import { css } from "@emotion/react";
import Navbar from '../components/Navbar';
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

// Budgeting App images
import image_budgeting_main from '../images/projects/Budgeting App/budgeting_main.PNG';
import image_budgeting_home from '../images/projects/Budgeting App/budgeting_home.PNG';
import image_budgeting_edit from '../images/projects/Budgeting App/budgeting_edit.PNG';
import image_budgeting_daily from '../images/projects/Budgeting App/budgeting_daily.PNG';
import image_budgeting_monthly from '../images/projects/Budgeting App/budgeting_monthly.PNG';

// A_Game images
import image_A_Game_SignIn from '../images/projects/A_Game/A_Game_SignIn.png';
import image_A_Game_SignUp from '../images/projects/A_Game/A_Game_SignUp.png';
import image_A_Game_Landing from '../images/projects/A_Game/A_Game_Landing.png';
import image_A_Game_About from '../images/projects/A_Game/A_Game_About.png';
import image_A_Game_EasterEgg from '../images/projects/A_Game/A_Game_EasterEgg.png';
import image_A_Game_Profile from '../images/projects/A_Game/A_Game_Profile.png';
import image_A_Game_Leaderboard from '../images/projects/A_Game/A_Game_Leaderboard.png';
import image_A_Game_Loading from '../images/projects/A_Game/A_Game_Loading.png';
import image_A_Game_InGame1 from '../images/projects/A_Game/A_Game_InGame1.png';
import image_A_Game_InGame2 from '../images/projects/A_Game/A_Game_InGame2.png';
import image_A_Game_InGame3 from '../images/projects/A_Game/A_Game_InGame3.png';
import image_A_Game_GameOver from '../images/projects/A_Game/A_Game_GameOver.png';

// Hangman images
import image_hangman_Begin from '../images/projects/Hangman/Hangman_Begin.png';
import image_hangman_InProgress from '../images/projects/Hangman/Hangman_InProgress.png';
import image_hangman_GameOver from '../images/projects/Hangman/Hangman_GameOver.png';


const Projects = () => {

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
            <animated.div className='mainProjects' style={props}>
                <div className='projectsDiv'>
                    <h2>Projects Page</h2>
                    <hr />

                    <div className="div_project">
                        <div className="project_description">
                            <h2 className="project_title">Evanescent</h2>
                            <h3 className="project_year">2021 - 2021</h3>
                        </div>

                        <Carousel className="carousel_project">
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_evanescent_Home}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_evanescent_Landing1}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
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
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_evanescent_SignIn}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={image_evanescent_Profile}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_evanescent_Search}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_evanescent_ItemDetails}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_evanescent_Portfolio}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <div className="div_projectButton">
                            <Button className="button_project" variant="outline-light">More Info</Button>{' '}
                        </div>

                    </div>

                    <hr />

                    <div className="div_project">
                        <div className="project_description">
                            <h2 className="project_title">API Quiz Creator</h2>
                            <h3 className="project_year">2021 - 2021</h3>
                        </div>


                        <Carousel className="carousel_project">
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <div className="div_projectButton">
                            <Button className="button_project" variant="outline-light">More Info</Button>{' '}
                        </div>

                    </div>

                    <hr />

                    <div>
                        <div className="project_description">
                            <h2 className="project_title">Electric Advantage</h2>
                            <h3 className="project_year">2021 - 2021</h3>
                        </div>


                        <Carousel className="carousel_project">
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <div className="div_projectButton">
                            <Button className="button_project" variant="outline-light">More Info</Button>{' '}
                        </div>

                    </div>

                    <hr />

                    <div className="div_project">
                        <div className="project_description">
                            <h2 className="project_title">Budgeting App for Android</h2>
                            <h3 className="project_year">2021 - 2021</h3>
                        </div>
                        <Carousel className="carousel_project">
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_budgeting_home}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_budgeting_edit}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_budgeting_daily}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_budgeting_monthly}
                                alt="Fourth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        
                        <div className="div_projectButton">
                            <Button className="button_project" variant="outline-light">More Info</Button>{' '}
                        </div>
                    </div>

                    <hr />

                    <div>
                        <div className="project_description">
                            <h2 className="project_title">A_Game</h2>
                            <h3 className="project_year">2020 - 2020</h3>
                        </div>
                        
                        <Carousel className="carousel_project">
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_SignIn}
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_SignUp}
                                alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_Landing}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_About}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_EasterEgg}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_Leaderboard}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_Profile}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_Loading}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_InGame1}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_InGame2}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_InGame3}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_A_Game_GameOver}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <div className="div_projectButton">
                            <Button className="button_project" variant="outline-light">More Info</Button>{' '}
                        </div>

                    </div>

                    <hr />

                    <div>
                        <div className="project_description">
                            <h2 className="project_title">Marked</h2>
                            <h3 className="project_year">2020 - 2020</h3>
                        </div>

                        <Carousel className="carousel_project">
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <div className="div_projectButton">
                            <Button className="button_project" variant="outline-light">More Info</Button>{' '}
                        </div>

                    </div>

                    <hr />

                    <div>
                        <div className="project_description">
                            <h2 className="project_title">Hangman</h2>
                            <h3 className="project_year">2020 - 2020</h3>
                        </div>

                        <Carousel className="carousel_project">
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_hangman_Begin}
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_hangman_InProgress}
                                alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={image_hangman_GameOver}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <div className="div_projectButton">
                            <Button className="button_project" variant="outline-light">More Info</Button>{' '}
                        </div>

                    </div>

                    <div>
                        <div className="project_description">
                            <h2 className="project_title">Zombie Hunter</h2>
                            <h3 className="project_year">2020 - 2020</h3>
                        </div>

                        <Carousel className="carousel_project">
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <div className="div_projectButton">
                            <Button className="button_project" variant="outline-light">More Info</Button>{' '}
                        </div>

                    </div>

                </div>
            </animated.div>

        </>
    );
}

export default Projects;
