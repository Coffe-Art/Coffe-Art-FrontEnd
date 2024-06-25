import React from 'react';
import './Footer.css';
import { FaInstagram, FaPinterestP, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <NavLink to="/contacto" className="text-white text-lg font-semibold  m-4 hover:text-blackyellow" activeClassName="font-bold">Contacto</NavLink> 
    <NavLink to="/direccion" className="text-white text-lg font-semibold m-4 hover:text-blackyellow" activeClassName="font-bold">Dirección</NavLink>
    <NavLink to="/terminos" className="text-white text-lg font-semibold  m-4 hover:text-blackyellow" activeClassName="font-bold">Terminos y condiciones</NavLink>
    
      </div>
      <div className="social-icons">
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
    <FaInstagram className="icon-instagram" />
  </a>
  <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
    <FaPinterestP className="icon-pinterest" />
  </a>
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
    <FaYoutube className="icon-youtube" />
  </a>
  <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
    <FaWhatsapp className="icon-whatsapp" />
  </a>
</div>
    </footer>
  );
};
