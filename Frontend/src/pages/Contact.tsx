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
import LocationMap from '../components/map/LocationMap';

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
                    secondary="Avenida Central, Nº 11, Chacaras - Bertioga, São Paulo - SP" 
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
        <Paper elevation={3} sx={{ overflow: 'hidden' }}>
          <LocationMap height={450} />
        </Paper>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Venha nos visitar! Você pode usar o mapa acima para nos encontrar facilmente.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact; 