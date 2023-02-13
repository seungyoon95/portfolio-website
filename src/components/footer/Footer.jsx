import React from "react";
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h2 className="footer-title">Lee</h2>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer-link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://github.com/seungyoon95"
            className="footer-social-link"
            target="__blank"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/seungyoon95/"
            className="footer-social-link"
            target="__blank"
          >
            <LinkedInIcon />
          </a>
        </div>

        <span className="footer-copy">&#169; Seungyoon Lee. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
