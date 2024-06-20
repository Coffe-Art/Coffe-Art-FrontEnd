import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Artesanías.png';
import BackgroundImage from '../../assets/FondoMenu.png';
import Background from '../../assets/Fondo.png';

export const Help = () => {
  const navigate = useNavigate();
  const [userQuestion, setUserQuestion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/#');
  };

  const handleLoginClick = () => {
    navigate('/#');
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    // Replace with your logic to handle question submission
    console.log('Question submitted:', userQuestion);
    setUserQuestion('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Replace with your logic to handle search submission
    console.log('Search submitted:', searchQuery);
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div
        className="md:w-1/6 bg-cover bg-center p-4 text-white"
        style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="flex flex-col items-center">
          <a href="/#" onClick={handleLogoClick} className="mb-6">
            <img src={Logo} alt="Logo" className="h-32 w-32" />
          </a>
          <nav className="flex flex-col items-center space-y-6">
            <NavLink to="/menu" className="text-2xl text-white hover:text-darkyellow font-bold">
              Menú
            </NavLink>
            <NavLink to="/profile" className="text-2xl text-white hover:text-darkyellow font-bold">
              Perfil
            </NavLink>
            <NavLink to="/product" className="text-2xl text-white hover:text-darkyellow font-bold">
              Producto
            </NavLink>
            <NavLink to="/help" className="text-2xl text-white hover:text-darkyellow font-bold">
              Ayuda
            </NavLink>
            <button
              className="bg-darkyellow text-white px-4 py-2 rounded hover:bg-lightyellow mt-4 text-xl font-bold"
              onClick={handleLoginClick}
            >
              Regresar
            </button>
          </nav>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow">
  <div
    className="w-full h-full flex justify-center items-center bg-cover bg-center p-4"
    style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="flex flex-col items-center justify-center text-center p-8 bg-white bg-opacity-70 rounded-lg max-w-lg mx-auto md:max-w-2xl w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Ayuda y Preguntas Frecuentes</h1>
      
      <form onSubmit={handleSearchSubmit} className="flex items-center mb-8">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="ml-2 bg-darkyellow text-white px-4 py-2 rounded hover:bg-lightyellow text-xl font-bold"
        >
          Buscar
        </button>
      </form>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Preguntas Frecuentes</h2>
        <div className="text-lg text-gray-700">
          <p><strong>¿Cuáles son los métodos de pago aceptados?</strong></p>
          <p>Aceptamos tarjetas de crédito y débito, transferencias bancarias y pagos en efectivo en tienda.</p>
          <p><strong>¿Cuánto tiempo tarda en llegar mi pedido?</strong></p>
          <p>El tiempo de entrega depende de tu ubicación y del método de envío seleccionado. Normalmente, los pedidos son entregados en 3-5 días hábiles.</p>
          <p><strong>¿Cómo puedo cambiar mi dirección de envío?</strong></p>
          <p>Puedes cambiar tu dirección de envío en la sección de perfil de usuario o contactando a nuestro servicio al cliente.</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">¿Cómo puedo hacer una pregunta?</h2>
        <p className="text-lg text-gray-700">
          Puedes hacer una pregunta enviándonos un mensaje a través del formulario de contacto o directamente en la sección de soporte.
        </p>
        <form onSubmit={handleQuestionSubmit} className="mt-4">
          <textarea
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Escribe tu pregunta aquí..."
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-darkyellow text-white px-4 py-2 rounded hover:bg-lightyellow mt-4 text-xl font-bold"
          >
            Enviar Pregunta
          </button>
        </form>
      </div>
      
    </div>
  </div>
</div>

    </div>
  );
};
