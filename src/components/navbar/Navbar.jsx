import React, { useState } from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");
    if (this.scrollY >= 80) navbar.classList.add("scroll-navbar");
    else navbar.classList.remove("scroll-navbar");
  });
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  return (
    <header className="navbar">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Seungyoon Lee
        </a>

        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <div className="nav-icon">
                  <HomeIcon className="nav-icon" />
                </div>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <div className="nav-icon">
                  <InfoIcon className="nav-icon" />
                </div>
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav-link active-link" : "nav-link"
                }
              >
                <div className="nav-icon">
                  <CodeIcon className="nav-icon" />
                </div>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <div className="nav-icon">
                  <WorkIcon className="nav-icon" />
                </div>
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav-link active-link" : "nav-link"
                }
              >
                <div className="nav-icon">
                  <ContactMailIcon className="nav-icon" />
                </div>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-close">
            <CloseIcon onClick={() => setToggle(!toggle)} />
          </div>
        </div>

        <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
          <AppsIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
