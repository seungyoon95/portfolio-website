import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Social = () => {
  return (
    <div className="home-social">
        <a href="https://github.com/seungyoon95" className="home-social-icon" target="__blank">
            <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/seungyoon95/" className="home-social-icon" target="__blank">
            <LinkedInIcon />
        </a>
    </div>
  )
};

export default Social;
