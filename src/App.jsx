import React from 'react';
import Testimonio from './Testimonio'; // Importamos el componente 'Testimonio' desde otro archivo.

// Array de objetos que contiene la información de los testimonios.
const testimoniosData = [
  {
    id: 1, // ID único para identificar el testimonio.
    nombre: 'Juan Pérez', // Nombre de la persona que da el testimonio.
    cargo: 'Desarrollador Web', // Cargo o profesión de la persona.
    testimonio: 'React es una biblioteca increíble para construir interfaces dinámicas.', // Opinión sobre React.
    imagen: 'https://i.pinimg.com/736x/c9/82/48/c982482d10bea0efab8bb5af1939f0e3.jpg', // URL de la imagen asociada al testimonio.
    alt: 'Juan Pérez en su oficina' // Descripción alternativa de la imagen (importante para accesibilidad).
  },
  {
    id: 2, 
    nombre: 'Ana Gómez',
    cargo: 'Ingeniera de Software',
    testimonio: 'Me encanta la modularidad que ofrece React en el desarrollo de aplicaciones.',
    imagen: 'https://i.pinimg.com/736x/52/31/b5/5231b536bc94f4049b9cd2c3fb1d8547.jpg',
    alt: 'Ana Gómez trabajando'
  },
  {
    id: 3, // ID único para identificar el testimonio.
    nombre: 'Juan Pérez', // Nombre de la persona que da el testimonio.
    cargo: 'Desarrollador Web', // Cargo o profesión de la persona.
    testimonio: 'React es una biblioteca increíble para construir interfaces dinámicas.', // Opinión sobre React.
    imagen: 'https://i.pinimg.com/736x/c9/82/48/c982482d10bea0efab8bb5af1939f0e3.jpg', // URL de la imagen asociada al testimonio.
    alt: 'Juan Pérez en su oficina' // Descripción alternativa de la imagen (importante para accesibilidad).
  },
  {
    id: 4, 
    nombre: 'Ana Gómez',
    cargo: 'Ingeniera de Software',
    testimonio: 'Me encanta la modularidad que ofrece React en el desarrollo de aplicaciones.',
    imagen: 'https://i.pinimg.com/736x/52/31/b5/5231b536bc94f4049b9cd2c3fb1d8547.jpg',
    alt: 'Ana Gómez trabajando'
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