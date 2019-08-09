import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = props => {
  return (
    <div>
      <div className='footer-container'>
      <img className='footer-logo' src='../images/logo_footer.svg' alt='cinex logotype' />
      <p>Feito com &#x2764; para IronHack - Project 3</p>

      <ul className='footer-links'>
        <Link to='#'><li>Sobre o CineXp</li></Link>
        <Link to='#'><li>Assessoria de Imprensa</li></Link>
        <Link to='#'><li>Política de Privacidade</li></Link>
      </ul>
      </div>  
    </div>
  );
};
export default Footer;
