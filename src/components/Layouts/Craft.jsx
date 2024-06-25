import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Craft = () => {
  const products = [
    {
      id: 1,
      vendedor: 'Vendedor A',
      producto: 'Producto A',
      descripcion: 'Descripción del Producto A',
      stock: 10,
      precio: 100,
      imagen: 'https://example.com/productoA.jpg'
    },
    {
      id: 2,
      vendedor: 'Vendedor B',
      producto: 'Producto B',
      descripcion: 'Descripción del Producto B',
      stock: 5,
      precio: 75,
      imagen: 'https://example.com/productoB.jpg'
    },
    {
      id: 3,
      vendedor: 'Vendedor C',
      producto: 'Producto C',
      descripcion: 'Descripción del Producto C',
      stock: 3,
      precio: 120,
      imagen: 'https://example.com/productoC.jpg'
    },
    {
      id: 4,
      vendedor: 'Vendedor D',
      producto: 'Producto D',
      descripcion: 'Descripción del Producto D',
      stock: 8,
      precio: 90,
      imagen: 'https://example.com/productoD.jpg'
    },
    {
      id: 5,
      vendedor: 'Vendedor E',
      producto: 'Producto E',
      descripcion: 'Descripción del Producto E',
      stock: 12,
      precio: 110,
      imagen: 'https://example.com/productoE.jpg'
    },
    {
      id: 6,
      vendedor: 'Vendedor F',
      producto: 'Producto F',
      descripcion: 'Descripción del Producto F',
      stock: 6,
      precio: 85,
      imagen: 'https://example.com/productoF.jpg'
    },
    {
      id: 7,
      vendedor: 'Vendedor G',
      producto: 'Artesanía G',
      descripcion: 'Descripción de la Artesanía G',
      stock: 15,
      precio: 150,
      imagen: 'https://example.com/artesaniaG.jpg'
    },
    {
      id: 8,
      vendedor: 'Vendedor H',
      producto: 'Artesanía H',
      descripcion: 'Descripción de la Artesanía H',
      stock: 7,
      precio: 95,
      imagen: 'https://example.com/artesaniaH.jpg'
    },
    // Agrega más productos/artesanías con imágenes aquí según sea necesario
  ];

  return (
    <div>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto my-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.producto}</h3>
              <p><strong>Vendedor:</strong> {product.vendedor}</p>
              <p className="text-sm text-darkpurple mb-2"><strong>Descripción:</strong> {product.descripcion}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Precio:</strong> ${product.precio}</p>
              <button className="mt-4 bg-darkyellow hover:bg-lightyellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};


