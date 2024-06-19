import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; 
import Logo from '../../assets/Artesanías.png';
import BackgroundImage from '../../assets/FondoMenu.png';
import Background from '../../assets/Fondo.png';
import { EditableField } from './EditableField';
import './Profile.css';

export const Profile = () => {
  const [name, setName] = useState('Nombre de Usuario');
  const [email, setEmail] = useState('usuario@example.com');
  const [phone, setPhone] = useState('123-456-7890');

  const handleLogoClick = (e) => {
    e.preventDefault();
  };

  const handleLoginClick = () => {
  
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="md:w-1/6 bg-cover bg-center p-4 text-white" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col items-center">
          <a href="/#" onClick={handleLogoClick} className="mb-6">
            <img src={Logo} alt="Logo" className="h-32 w-32" />
          </a>
          <nav className="flex flex-col items-center space-y-6">
            <NavLink to="/menu" className="text-2xl text-white hover:text-yellow-600 font-bold">Menú</NavLink>
            <NavLink to="/profile" className="text-2xl text-white hover:text-yellow-600 font-bold">Perfil</NavLink>
            <NavLink to="/producto" className="text-2xl text-white hover:text-yellow-600 font-bold">Producto</NavLink>
            <NavLink to="/asistente" className="text-2xl text-white hover:text-yellow-600 font-bold">Asistente</NavLink>
            <button
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500 mt-4 text-xl font-bold"
              onClick={handleLoginClick}
            >
              Regresar
            </button>
          </nav>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="w-full h-full flex justify-center items-center bg-cover bg-center p-4" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="flex flex-col items-center justify-center text-center p-8 bg-white bg-opacity-70 rounded-lg max-w-lg mx-auto md:max-w-2xl w-full">
            <FaRegUserCircle className="h-20 w-20 mb-4 text-black" />
            <h1 className="text-black text-3xl md:text-5xl font-bold mb-8">Perfil de Usuario</h1>
            <EditableField label="Nombre:" value={name} onChange={(e) => setName(e.target.value)} />
            <EditableField label="Correo:" value={email} onChange={(e) => setEmail(e.target.value)} />
            <EditableField label="Teléfono:" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500 mt-8 text-lg md:text-xl font-bold">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

