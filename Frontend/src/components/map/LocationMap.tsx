import React from 'react';
import { Box } from '@mui/material';

// Endereço completo para pesquisa mais precisa
const address = "Av. Central, 11 - Vista Linda, Bertioga - SP, 11259-219, Brasil";
const encodedAddress = encodeURIComponent(address);

// URL para o iframe do Google Maps
const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`;

interface LocationMapProps {
  height?: string | number;
}

const LocationMap: React.FC<LocationMapProps> = ({ height = '450px' }) => {
  return (
    <Box sx={{ height, width: '100%', borderRadius: 1, overflow: 'hidden' }}>
      <iframe
        title="Localização da Esquadrimar"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '8px' }}
        loading="lazy"
        allowFullScreen
        src={googleMapsEmbedUrl}
      ></iframe>
    </Box>
  );
};

export default LocationMap; 