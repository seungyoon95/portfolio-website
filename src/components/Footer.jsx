import '../components/css/Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footerLeft'>
        <h3>© 2021 Seungyoon Lee</h3>
      </div>
      <div className='footerRight'>
        <h2><NavLink className='footerLink' to="/about">About</NavLink></h2>
        <h2><NavLink className='footerLink' to="/projects">Projects</NavLink></h2>
        <h2><NavLink className='footerLink' to="/contact">Contact</NavLink></h2>
        {/* <a href='https://www.facebook.com/dhy02041/'><i class="fab fa-facebook-square fa-3x"></i></a>
        <a href='https://www.instagram.com/seungyoon1/'><i class="fab fa-instagram-square fa-3x"></i></a>
        <a href='https://www.youtube.com/channel/UC-BbVGi8JWK6Kb7xthRyPig'><i class="fab fa-youtube-square fa-3x"></i></a>
        <a href='https://www.linkedin.com/in/seungyoon95/'><i class="fab fa-linkedin fa-3x"></i></a>
        <a href='https://github.com/seungyoon95'><i class="fab fa-github-square fa-3x"></i></a> */}
      </div>
    </footer>
  );
};
export default Footer;