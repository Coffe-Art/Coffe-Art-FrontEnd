import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Artesanías.png';
import BackgroundImage from '../../assets/FondoMenu.png';
import Background from '../../assets/Fondo.png';
import { FaRegUserCircle } from 'react-icons/fa';

export const Product = ({ isAuthenticated, userType }) => {
  const navigate = useNavigate();
  const [showAccessMessage, setShowAccessMessage] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([
    { id: 1, name: 'Producto Favorito 1' },
    { id: 2, name: 'Producto Favorito 2' },
  ]);
  const [popularProducts, setPopularProducts] = useState([
    { id: 1, name: 'Producto Popular 1' },
    { id: 2, name: 'Producto Popular 2' },
  ]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/');
  };

  const handleReportClick = () => {
    if (userType === 'vendedor') {
      navigate('/reporte-ventas');
    } else {
      setShowAccessMessage(true);
      setTimeout(() => setShowAccessMessage(false), 5000);
    }
  };

  const handleRemoveFavorite = (productId) => {
    const updatedFavorites = favoriteProducts.filter((product) => product.id !== productId);
    setFavoriteProducts(updatedFavorites);
  };

  const handleRemovePopular = (productId) => {
    const updatedPopular = popularProducts.filter((product) => product.id !== productId);
    setPopularProducts(updatedPopular);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white"> 
      <div className="md:w-1/6 bg-cover bg-center p-4 text-white" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col items-center">
          <a href="/#" onClick={handleLogoClick} className="mb-6">
            <img src={Logo} alt="Logo" className="h-32 w-32" />
          </a>
          <nav className="flex flex-col items-center space-y-6">
            <NavLink to="/menu" className="text-2xl text-white hover:text-darkyellow font-bold">Menú</NavLink>
            <NavLink to="/profile" className="text-2xl text-white hover:text-darkyellow font-bold">Perfil</NavLink>
            <NavLink to="/product" className="text-2xl text-white hover:text-darkyellow font-bold">Producto</NavLink>
            <NavLink to="/help" className="text-2xl text-white hover:text-darkyellow font-bold">Ayuda</NavLink>
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
          className="w-full h-full flex flex-col justify-center items-center bg-cover bg-center p-4"
          style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col items-center justify-center text-center p-8 bg-white bg-opacity-70 rounded-lg max-w-lg mx-auto md:max-w-2xl w-full">
          
            <FaRegUserCircle className="h-20 w-20 text-gray-800 mb-4" />
            <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">¡Bienvenido a productos!</h1>
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-darkyellow mb-4 justify-center">Productos favoritos</h1>
            {favoriteProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg mb-2">
                <span className="text-lg">{product.name}</span>
                <button
                  className="text-darkyellow"
                  onClick={() => handleRemoveFavorite(product.id)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-bold text-darkyellow mb-4 justify-center">Productos más comprados</h1>
            {popularProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg mb-2">
                <span className="text-lg">{product.name}</span>
                <button
                  className="text-darkyellow"
                  onClick={() => handleRemovePopular(product.id)}
                >
                  X
                </button>
              </div>
            ))}
            
        </div>
      </div>
    </div>
    </div>
</div>
  );
};

