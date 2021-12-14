import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

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
            document.body.style.overflow = 'auto';
        }

        return classes;
    }

    return (
    <nav>
        <div className="logo">
            <i className="fas fa-laptop-code"><NavLink to="/"></NavLink></i>
            {/* <h4>Seungyoon Lee</h4> */}
        </div>
        <ul className={renderNavbar()}>
                <li className="link"><NavLink to="/">Home</NavLink></li>
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