import React from 'react';
import Testimonio from './components/Testimonio';
import { Typography, Grid2 } from '@mui/material';
import { AnibalMG } from 'milibreria';

const App = () => {
  const testimoniosData = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/564x/42/6a/a2/426aa247c92cf0f3e1db0fc3b7c1ff20.jpg',
      altText: 'Alexander Hedeon',
      title: 'Alexander Hedeon',
      body: 'La mejor defensa e un buen ataque.',
    },
    {
      id: 2,
      imageUrl: 'https://i.pinimg.com/564x/e7/46/b9/e746b9dff48427c4ffe1943a62541ad4.jpg',
      altText: 'Pelusa en partida',
      title: 'Pelusa',
      body: 'Dungeon Meowster',
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/564x/37/39/b3/3739b3b63fa6cb9fcd1b58aab842e2df.jpg',
      altText: 'Panadero',
      title: 'Miguel Bozanbique',
      body: 'El pan es la mejor medicina que existe.',
    },
    {
      id: 4,
      imageUrl: 'https://i.pinimg.com/564x/ad/c8/02/adc802b14ef5bbf05c58b0cd9424619e.jpg',
      altText: 'Marta',
      title: 'Pixie',
      body: 'La musica, el baile y unas cervezas son lo mejor para aliviar los nervios.',
    }
  ];

  return (
    <div>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Anibal Marquez Guedez
      </Typography>

      <Grid2 container spacing={2} justifyContent="center" alignItems="center" style={{ width: '100vw', margin: '0 auto' }}>
        {testimoniosData.map((testimonio) => (
          <Grid2 item xs={12} sm={6} md={4} key={testimonio.id}>
            <Testimonio
              imageUrl={testimonio.imageUrl}
              altText={testimonio.altText}
              title={testimonio.title}
              body={testimonio.body}
            />
          </Grid2>
        ))}
      </Grid2>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center" style={{ width: '100vw', margin: '0 auto' }}>
        <Grid2>
          <Typography>
            Puntue su experiencia
          </Typography>
        </Grid2>
        <Grid2>
        <AnibalMG
        defval={3}
        precision={0.1}
        color="secondary"
        maxrating={10}
      />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default App;