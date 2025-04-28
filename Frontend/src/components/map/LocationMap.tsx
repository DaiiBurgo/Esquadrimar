import React from 'react';
import { Box } from '@mui/material';

interface LocationMapProps {
  height?: string | number;
}

const LocationMap: React.FC<LocationMapProps> = ({ height = '450px' }) => {
  return (
    <Box sx={{ height, width: '100%', borderRadius: 1, overflow: 'hidden' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3646.000273402762!2d-46.139866!3d-23.792809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03aa43aa7bad%3A0x96f4a3b18f9cad7f!2sEsquadrimar!5e0!3m2!1spt-BR!2sbr!4v1715380546319!5m2!1spt-BR!2sbr"
        width="100%" 
        height="100%" 
        style={{ border: 0, borderRadius: '8px' }}
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Esquadrimar"
      />
    </Box>
  );
};

export default LocationMap; 