import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import icon from '../images/Icon/Icon.png';

const Navbar = () => {
    
    const [navLinkOpen, navLinkToggle] = useState(false);

    const handleNavLinkToggle = () => {
        navLinkToggle(!navLinkOpen);
    };

    const renderMenuIcon = () => {
        let classes = "fas fa-bars fa-2x";

        if (navLinkOpen) {
            classes = "fas fa-window-close fa-2x";
        }

        return classes;
    }

    const renderNavbar = () => {
        let classes = "navlinks";

        if (navLinkOpen) {
            classes += " active";
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
            document.body.style.overflowX = 'hidden';
        }

        return classes;
    }

    return (
    <nav className='navbar'>
        <div className="logo">
        {/* <NavLink to="/"><img className="image_logo" src={icon} alt="logo"/></NavLink> */}
            <NavLink to="/"><i class="fas fa-code-branch"></i></NavLink>
            {/* <h4>Seungyoon Lee</h4> */}
        </div>
        <ul className={renderNavbar()}>
                {/* <li className="link"><NavLink to="/">Home</NavLink></li> */}
                <li className="link"><NavLink to="/about">About</NavLink></li>
                <li className="link"><NavLink to="/projects">Projects</NavLink></li>
                <li className="link"><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <div onClick={handleNavLinkToggle} className="hamburger-toggle">
            <i className={renderMenuIcon()}></i>
        </div>
    </nav>
    
    );
}

export default Navbar;