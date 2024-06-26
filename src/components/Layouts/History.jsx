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
            <h1>Wenas</h1>
        </div>
    );
};