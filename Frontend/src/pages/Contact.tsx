import React from 'react';
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
                    secondary="Rua das Marmorarias, 123, Bairro Industrial, São Paulo - SP, CEP: 12345-678" 
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Telefone" 
                    secondary="(11) 1234-5678 / (11) 98765-4321" 
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email" 
                    secondary="contato@esquadrimar.com.br" 
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <AccessTimeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Horário de Funcionamento" 
                    secondary="Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h" 
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <ContactForm />
        </Grid>
      </Grid>
      
      {/* Mapa */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Nossa Localização
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Paper elevation={3} sx={{ height: '400px', overflow: 'hidden' }}>
          {/* Substitua pelo componente de mapa real */}
          <Box 
            sx={{ 
              width: '100%', 
              height: '100%', 
              bgcolor: 'grey.200',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body1" color="text.secondary">
              Mapa será carregado aqui (Google Maps ou Leaflet)
            </Typography>
          </Box>
        </Paper>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          * Para implementação real, utilize a API do Google Maps ou Leaflet para exibir a localização da empresa.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact; 