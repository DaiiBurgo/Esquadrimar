import React, { useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/map/LocationMap';

const Contact: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll para o elemento apropriado baseado no hash
    if (location.hash === '#topo') {
      window.scrollTo(0, 0);
    } else if (location.hash === '#formulario-contato') {
      // Pequeno atraso para garantir que o DOM está completamente carregado
      setTimeout(() => {
        const element = document.getElementById('formulario-contato');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="topo">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Entre em Contato
        </Typography>
        <Divider sx={{ width: '80px', margin: '0 auto', mb: 3, borderWidth: 2 }} />
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Estamos prontos para atender às suas necessidades. Entre em contato conosco para tirar 
          dúvidas, solicitar orçamentos ou agendar uma visita.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Informações de Contato
              </Typography>
              <Divider sx={{ mb: 3 }} />
              
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Endereço" 
                    secondary="Av. Central, 11 - Chacaras, Bertioga - SP, 11259-219" 
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Telefone" 
                    secondary="(13) 3311-7222 / WhatsApp: (13) 99622-7222" 
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email" 
                    secondary="financeiro1@esquadrimar.com.br" 
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <AccessTimeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Horário de Funcionamento" 
                    secondary="Segunda a Sexta: 8h às 17h30 | Sábado: 8h às 13h" 
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={7} id="formulario-contato">
          <ContactForm />
        </Grid>
      </Grid>
      
      {/* Seção do Mapa */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Nossa Localização
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Paper elevation={3} sx={{ overflow: 'hidden', p: 0 }}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Typography variant="body1" paragraph>
              Estamos localizados no bairro Chácaras em Bertioga/SP.
              Visite nosso showroom para conhecer nossos produtos de alta qualidade.
            </Typography>
          </Box>
          <LocationMap height={450} />
          <Box sx={{ p: 3, pt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Dica:</strong> Clique no marcador para ver nosso endereço completo.
              Você pode usar os controles de zoom ou arrastar o mapa para explorar a região.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contact; 