import React from 'react';
import { NavLink } from 'react-router-dom';

const Showcase = () => {
    return (
        <div className="showcase">
            <h2>Full Stack / Software Developer</h2>
            <h1>Seungyoon (Jack) Lee</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Perferendis ipsa molestias et ad quisquam tenetur! Optio 
                quibusdam nulla recusandae. Natus, ratione inventore error 
                nostrum esse quidem magnam eveniet animi consectetur!</p>
        
            <div className="showcase_buttons">
                <button className="showcase_btn-projects"><NavLink to="/projects" className='link-projects'>Projects</NavLink></button>
                <button className="showcase_btn-about"><NavLink to="/about" className='link-about'>About</NavLink></button>
            </div>
        </div>
    )
}

export default Showcase;
