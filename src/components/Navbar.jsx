import React, { useState } from "react";

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
        }

        return classes;
    }

    return (
    <nav>
        <div className="logo">
            <i className="fas fa-laptop-code"></i>
            {/* <h4>Seungyoon Lee</h4> */}
        </div>
        <ul className={renderNavbar()}>
            <li className="link"><a href="#">Home</a></li>
            <li className="link"><a href="#">About</a></li>
            <li className="link"><a href="#">Projects</a></li>
            <li className="link"><a href="#">Contact</a></li>
        </ul>

        <div onClick={handleNavLinkToggle} className="hamburger-toggle">
            <i className={renderMenuIcon()}></i>
        </div>
    </nav>
    
    );
}

export default Navbar;