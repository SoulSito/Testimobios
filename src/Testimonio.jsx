import React, { useState } from 'react'; // Importamos React y el hook useState para manejar el estado local.
import { Card, CardContent, Typography, IconButton } from '@mui/material'; // Importamos componentes de Material UI para estilizar la interfaz.
import FavoriteIcon from '@mui/icons-material/Favorite'; // Icono de "Me gusta" lleno.
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Icono de "Me gusta" vacío.

const Testimonio = ({ nombre, cargo, testimonio, imagen, alt }) => {
  // Definimos el estado 'meGusta' con useState, que inicialmente es 'false' (el testimonio no está marcado con "Me gusta").
  const [meGusta, setMeGusta] = useState(false);

  // Función para alternar el estado de 'meGusta' entre true y false.
  const toggleMeGusta = () => {
    setMeGusta(!meGusta); // Cambia el estado entre 'true' (me gusta activado) y 'false' (me gusta desactivado).
  };

  return (
    <Card style={{ width: '80%', maxWidth: '500px', margin: '20px auto', textAlign: 'center' }}>
      {/* Mostramos la imagen del testimonio con atributos src y alt para accesibilidad. */}
      <img src={imagen} alt={alt} style={{ width: '100%', height: 'auto' }} />
      <CardContent>
        {/* Mostramos el nombre del testimonio en formato de título. */}
        <Typography variant="h5">{nombre}</Typography>
        {/* Mostramos el cargo de la persona en formato de subtítulo. */}
        <Typography variant="subtitle1">{cargo}</Typography>
        {/* Mostramos el texto del testimonio con comillas. */}
        <Typography variant="body1">"{testimonio}"</Typography>
        
        {/* Botón de icono que cambia según el estado de 'meGusta'. */}
        <IconButton onClick={toggleMeGusta}>
          {/* Si 'meGusta' es true, muestra el icono de corazón lleno, de lo contrario, muestra el borde del corazón. */}
          {meGusta ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Testimonio; 