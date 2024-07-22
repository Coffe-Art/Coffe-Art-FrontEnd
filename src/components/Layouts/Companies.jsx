import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';

export const Companies = () => {
    const [empresas, setEmpresas] = useState([
        { id: 1, nombre: 'Empresa A', email: 'empresaA@example.com', telefono: '123-456-7890', rol: 'admin', descripcion: 'Descripción de la Empresa A' },
        { id: 2, nombre: 'Empresa B', email: 'empresaB@example.com', telefono: '987-654-3210', rol: 'seller', descripcion: 'Descripción de la Empresa B' },
    ]);

    const [showForm, setShowForm] = useState(false);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [rol, setRol] = useState('admin');
    const [descripcion, setDescripcion] = useState('');

    const navigate = useNavigate();

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleAddEmpresa = (e) => {
        e.preventDefault();
        const newEmpresa = {
            id: empresas.length + 1,
            nombre,
            email,
            telefono,
            rol,
            descripcion,
        };
        setEmpresas([...empresas, newEmpresa]);
        setNombre('');
        setEmail('');
        setTelefono('');
        setRol('admin');
        setDescripcion('');
        setShowForm(false);
    };

    const viewEmpresa = (id) => {
        navigate(`/company/${id}`); // Cambiar a la ruta correcta para ver detalles de la empresa
    };

    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="container mx-auto my-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {empresas.map(empresa => (
                        <div key={empresa.id} className="border rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={() => viewEmpresa(empresa.id)}>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{empresa.nombre}</h3>
                                <p>{empresa.descripcion}</p> {/* Mostrar descripción resumida */}
                            </div>
                        </div>
                    ))}
                    <div className="border rounded-lg overflow-hidden shadow-md">
                        <div className="p-4 cursor-pointer" onClick={toggleForm}>
                            <svg className="w-8 h-8 mb-2 text-darkyellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            <p className="text-center text-darkyellow">Agregar Empresa</p>
                        </div>
                    </div>
                </div>
                {showForm && (
                    <div className="container mx-auto mt-8">
                        <form onSubmit={handleAddEmpresa}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="nombre">
                                    Nombre de la Empresa
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Nombre de la Empresa"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Correo Electrónico"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="telefono">
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    id="telefono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Teléfono"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="rol">
                                    Rol
                                </label>
                                <select
                                    id="rol"
                                    value={rol}
                                    onChange={(e) => setRol(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                >
                                    <option value="admin">Administrador</option>
                                    <option value="seller">Vendedor</option>
                                    <option value="buyer">Comprador</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="descripcion">
                                    Descripción
                                </label>
                                <textarea
                                    id="descripcion"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Descripción de la empresa"
                                    rows={4}
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="bg-darkyellow hover:bg-lightyellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Crear Empresa
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
            <Footer />
            <div className="fixed bottom-4 right-4">
                <div className="relative">
                    <button
                        className="bg-darkpurple text-white p-3 rounded-full shadow-md"
                        onClick={() => navigate('/craft')}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4m.6 8l1.1 5H19m-7-5a2 2 0 100 4 2 2 0 000-4zm-5 2a2 2 0 100 4 2 2 0 000-4z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};