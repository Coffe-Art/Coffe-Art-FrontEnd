import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaBars, FaStar } from 'react-icons/fa';
import Header from '../../assets/Cabecera.png';
import { InformationMain } from './InformationMain';
import imageEarring from '../../assets/AretesArtesanales.jpg';
import imageRuana from '../../assets/RuanaArtesanal.jpg';
import imageBracelet from '../../assets/PulserasArtesanales.jpg';
import imageBag from '../../assets/BolsoArtesanal.jpg';

export const History = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [price, setPrice] = useState(500);
    const [rating, setRating] = useState(1);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const formatPrice = (value) => {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="min-h-screen bg-gray-200">
            <section className="flex p-8 bg-gray-200">
                <div className="p-1">
                    <button onClick={toggleFilter} className="p-1 rounded mb-2">
                        <FaBars className="text-darkyellow text-2xl" />
                    </button>
                </div>
                <div className="w-1/2">
                    <img src={Header} alt="HeaderMain" className="block mx-auto w-90 h-auto" />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold mb-4 text-center text-darkpurple">COFFE ART</h1>
                    <p className="text-lg text-center px-4 py-2 md:px-8 md:py-4 max-w-xl text-gray-800">
                        Descubre la magia de nuestras artesanías hechas con amor y tradición.
                    </p>
                </div>
            </section>

            {isFilterOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white p-4 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h2 className="text-xl font-bold mb-4 text-darkpurple">Filtrar Productos</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-gray-800">Categoría</label>
                            <select className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="all">Todas</option>
                                <option value="earrings">Aretes</option>
                                <option value="ruanas">Ruanas</option>
                                <option value="bracelets">Pulseras</option>
                                <option value="bags">Bolsos</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-gray-800">
                                Precio: {formatPrice(price)}
                            </label>
                            <input
                                type="range"
                                min="500"
                                max="500000"
                                value={price}
                                onChange={handlePriceChange}
                                className="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-gray-800">Valoración: {rating} estrella(s)</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={rating}
                                onChange={handleRatingChange}
                                className="w-full"
                            />
                            <div className="flex mt-2">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={index < rating ? 'text-darkyellow' : 'text-gray-300'}
                                    />
                                ))}
                            </div>
                        </div>
                        <button className="bg-darkyellow hover:bg-lightyellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Aplicar Filtros
                        </button>
                        <button onClick={toggleFilter} className="bg-darkpurple hover:bg-lightpurple text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            <div className="flex bg-darkpurple justify-center items-center h-64 px-4">
                <div className="w-full md:w-3/4 relative text-center justify-center">
                    <Slider {...settings}>
                        {InformationMain.map((item) => (
                            <div key={item.id} className="m-4 p-4 bg-purple text-center relative rounded-lg shadow-md">
                                <h2 className="text-darkyellow text-4xl font-bold">{item.title}</h2>
                                <p className="text-white text-sm m-4">{item.description}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
    
            </div>

            <div className="bg-gray-200">
                <div className="flex justify-center items-center h-70 px-4">
                    <div className="w-full md:w-3/4 relative p-6">
                        <h1 className="text-black text-4xl font-bold text-center">NOVEDADES</h1>
                        <p className="text-gray-800 text-lg m-4 text-center">
                            Descubre nuestras últimas adiciones y sorpresas que tenemos para ti.
                        </p>
                        <h1 className="text-darkyellow text-4xl font-bold text-center m-6">PRODUCTOS MÁS VENDIDOS</h1>
                        <div className="w-full flex flex-wrap justify-center">
                            <div className="product-container bg-darkyellow rounded-lg p-4 shadow-md text-center flex flex-col justify-center items-center mx-4 mb-4">
                                <img src={imageEarring} alt="imageEarring" className="w-40 h-auto mx-auto rounded-lg shadow-md" />
                                <h3 className="text-lg font-bold text-gray-800">Aretes Artesanales</h3>
                                <p className="text-sm text-gray-700">Descubre la belleza de nuestros aretes artesanales...</p>
                            </div>
                            <div className="product-container bg-darkyellow rounded-lg p-4 shadow-md text-center flex flex-col justify-center items-center mx-4 mb-4">
                                <img src={imageRuana} alt="imageRuana" className="w-40 h-auto mx-auto rounded-lg shadow-md" />
                                <h3 className="text-lg font-bold text-gray-800">Ruana Artesanal</h3>
                                <p className="text-sm text-gray-700">Descubre la comodidad de nuestra ruana artesanal...</p>
                            </div>
                            <div className="product-container bg-darkyellow rounded-lg p-4 shadow-md text-center flex flex-col justify-center items-center mx-4 mb-4">
                                <img src={imageBracelet} alt="imageBracelet" className="w-40 h-auto mx-auto rounded-lg shadow-md" />
                                <h3 className="text-lg font-bold text-gray-800">Pulseras Artesanales</h3>
                                <p className="text-sm text-gray-700">Descubre la elegancia de nuestras pulseras artesanales...</p>
                            </div>
                            <div className="product-container bg-darkyellow rounded-lg p-4 shadow-md text-center flex flex-col justify-center items-center mx-4 mb-4">
                                <img src={imageBag} alt="imageBag" className="w-40 h-auto mx-auto rounded-lg shadow-md" />
                                <h3 className="text-lg font-bold text-gray-800">Bolso Artesanal</h3>
                                <p className="text-sm text-gray-700">Descubre la practicidad de nuestro bolso artesanal...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};