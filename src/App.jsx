import React from 'react';
import Testimonio from './Testimonio'; // Importamos el componente 'Testimonio' desde otro archivo.

// Array de objetos que contiene la información de los testimonios.
const testimoniosData = [
  {
    id: 1, // ID único para identificar el testimonio.
    nombre: 'Alexander Hedeon', // Nombre de la persona que da el testimonio.
    cargo: 'Cazador de Dragones', // Cargo o profesión de la persona.
    testimonio: 'La mejor defensa e un buen ataque.', // Opinión sobre React.
    imagen: 'https://i.pinimg.com/564x/42/6a/a2/426aa247c92cf0f3e1db0fc3b7c1ff20.jpg', // URL de la imagen asociada al testimonio.
    alt: 'Alexander Hedeon en el campo' // Descripción alternativa de la imagen (importante para accesibilidad).
  },
  {
    id: 2, 
    nombre: 'Pelusa',
    cargo: 'Dungeon Meowster',
    testimonio: 'Miau.',
    imagen: 'https://i.pinimg.com/564x/e7/46/b9/e746b9dff48427c4ffe1943a62541ad4.jpg',
    alt: 'Pelusa en partida'
  },
  {
    id: 3, // ID único para identificar el testimonio.
    nombre: 'Miguel Bozanbique', // Nombre de la persona que da el testimonio.
    cargo: 'Panadero', // Cargo o profesión de la persona.
    testimonio: 'El pan es la mejor medicina que existe.', // Opinión sobre React.
    imagen: 'https://i.pinimg.com/564x/37/39/b3/3739b3b63fa6cb9fcd1b58aab842e2df.jpg', // URL de la imagen asociada al testimonio.
    alt: 'Miguel Bozanbique en la panaderia' // Descripción alternativa de la imagen (importante para accesibilidad).
  },
  {
    id: 4, 
    nombre: 'Pixie',
    cargo: 'Barda de chult',
    testimonio: 'La musica, el baile y unas cervezas son lo mejor para aliviar los nervios.',
    imagen: 'https://i.pinimg.com/564x/ad/c8/02/adc802b14ef5bbf05c58b0cd9424619e.jpg',
    alt: 'Pixie tocando'
  },
];

// Componente principal de la aplicación. 
const App = () => {
  return (
    <div>
      {/* Iteramos sobre el array 'testimoniosData' para renderizar cada testimonio. */}
      {testimoniosData.map(testimonio => (
        <Testimonio 
          key={testimonio.id} // Clave única necesaria para cada elemento renderizado dentro de un bucle.
          nombre={testimonio.nombre} // Pasamos el nombre como prop al componente 'Testimonio'.
          cargo={testimonio.cargo} // Pasamos el cargo como prop.
          testimonio={testimonio.testimonio} // Pasamos el texto del testimonio como prop.
          imagen={testimonio.imagen} // Pasamos la URL de la imagen como prop.
          alt={testimonio.alt} // Pasamos la descripción alternativa de la imagen como prop.
        />
      ))}
    </div>
  );
};

export default App; // Exportamos el componente 'App' para que pueda ser usado en otros archivos.