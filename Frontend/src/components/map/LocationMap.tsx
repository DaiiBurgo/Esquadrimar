import React from 'react';
import { Box } from '@mui/material';

interface LocationMapProps {
  height?: string | number;
}

const LocationMap: React.FC<LocationMapProps> = ({ height = '450px' }) => {
  // URL fornecida diretamente pelo usuário - contém localização precisa da Esquadrimar
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d328.02265106965126!2d-46.07660004992017!3d-23.801351101919572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdfc0e8faa7eb7%3A0x39ac67c921a0f7f0!2sEsquadrimar%20-%20Esquadrias%20de%20Alum%C3%ADnio%20%26%20Marmoraria!5e0!3m2!1spt-BR!2sbr!4v1746504964000!5m2!1spt-BR!2sbr";
  
  return (
    <Box sx={{ height, width: '100%', borderRadius: 1, overflow: 'hidden' }}>
      <iframe 
        src={mapUrl}
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