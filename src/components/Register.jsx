import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import BackgroundImage from '../assets/BackgroundLogin.jpg'; 
import { FaHome } from 'react-icons/fa';
import Logo from '../../src/assets/Artesanías.png';
import { useAuth } from '../Context/contextAuth'; // Asegúrate de importar useAuth

export const Register = () => {
    const navigate = useNavigate();
    const { register } = useAuth(); // Obtén la función de registro del contexto
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('comprador'); // Valor predeterminado en minúsculas

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (contrasena !== confirmarContrasena) {
            console.error('Las contraseñas no coinciden');
            return;
        }

        try {
            await register(tipoUsuario, nombreUsuario, nombreUsuario, contrasena, null, null, correoElectronico, null, null);
            navigate('/login'); // Redirige a la página de inicio de sesión después del registro
        } catch (error) {
            console.error('Error al intentar registrar el usuario:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen fixed top-0 left-0"
            style={{ 
                backgroundImage: `url(${BackgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}
        >
            <NavLink to="/" className="absolute top-4 left-4">
                <FaHome className="text-darkyellow text-4xl" />
            </NavLink>
            <div className="relative bg-white p-12 rounded shadow-md w-full max-w-md">
                <img src={Logo} alt="Logo" className="h-24 w-24 mx-auto mb-6" />
                <h1 className="text-2xl font-bold mb-6 text-center">Registrarse</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                            Nombre de Usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-darkyellow leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Nombre de Usuario"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={correoElectronico}
                            onChange={(e) => setCorreoElectronico(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-darkyellow leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Correo Electrónico"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-darkyellow leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmarContrasena}
                            onChange={(e) => setConfirmarContrasena(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-darkyellow leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Confirmar Contraseña"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="role">
                            Rol
                        </label>
                        <select
                            id="role"
                            value={tipoUsuario}
                            onChange={(e) => setTipoUsuario(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-darkyellow leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="administrador">Administrador</option>
                            <option value="empleado">Empleado</option>
                            <option value="comprador">Comprador</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-darkyellow hover:bg-lightyellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-black text-sm">¿Ya tienes una cuenta?</span>
                    <NavLink to="/login" className="text-darkyellow hover:underline text-sm ml-2">
                        Iniciar sesión
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
