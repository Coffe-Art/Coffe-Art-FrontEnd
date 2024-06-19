import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Artesanías.png';
import BackgroundImage from '../../assets/FondoHeader.jpg';

export const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header 
      className="bg-white shadow p-4 flex justify-between items-center" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex items-center mx-8">
            <a href="#" onClick={handleLogoClick}>
                <img src={Logo} alt="Logo" className="h-24 w-24" />
            </a>
        </div>
        <nav className="flex space-x-4">
            <NavLink to="/Menu" className="text-white text-lg font-semibold hover:text-blackyellow" activeClassName="font-bold">Menú</NavLink>
            <NavLink to="/historias" className="text-white text-lg font-semibold hover:text-blackyellow" activeClassName="font-bold">Historias</NavLink>
            <NavLink to="/eventos" className="text-white text-lg font-semibold hover:text-blackyellow" activeClassName="font-bold">Eventos</NavLink>
            <NavLink to="/artesanias" className="text-white text-lg font-semibold hover:text-blackyellow" activeClassName="font-bold">Artesanías</NavLink>
            <NavLink to="/cursos" className="text-white text-lg font-semibold hover:text-blackyellow" activeClassName="font-bold">Cursos</NavLink>
        </nav>
        <button
          className="bg-darkpurple text-white px-4 py-2 rounded hover:bg-lightpurple mx-8 font-mplus"
          onClick={handleLoginClick}
        >
          Iniciar Sesión
        </button>
    </header>
  );
};





