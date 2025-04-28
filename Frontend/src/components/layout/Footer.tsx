import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider, IconButton, Tooltip, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// URLs das redes sociais
const INSTAGRAM_URL = 'https://www.instagram.com/esquadrimar_bertioga/';
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5513996227222&text=Olá!%20Vim%20pelo%20site%20da%20Esquadrimar.';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              ESQUADRIMAR
            </Typography>
            <Typography variant="body2">
              Especialistas em marcenaria, serralheria e marmoraria com anos de experiência no mercado.
            </Typography>
            
            {/* Redes Sociais */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Siga-nos nas Redes Sociais
              </Typography>
              <Stack direction="row" spacing={1}>
                <Tooltip title="Instagram">
                  <IconButton 
                    component="a"
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    sx={{ 
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                      }
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="WhatsApp">
                  <IconButton 
                    component="a"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    sx={{ 
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                      }
                    }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links Rápidos
            </Typography>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/sobre"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Sobre Nós
            </Link>
            <Link
              component={RouterLink}
              to="/servicos"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Serviços
            </Link>
            <Link
              component={RouterLink}
              to="/portfolio"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Portfólio
            </Link>
            <Link
              component={RouterLink}
              to="/contato"
              color="inherit"
              display="block"
            >
              Contato
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2" paragraph>
              Avenida Anchieta, Nº 11
              <br />
              Chacaras
              <br />
              Bertioga - SP, CEP: 11259-219
            </Typography>
            <Typography variant="body2">
              Tel: (13) 3311-7222
              <br />
              WhatsApp: (13) 99622-7222
              <br />
              Email: financeiro1@esquadrimar.com.br
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        <Typography variant="body2" align="center">
          © {currentYear} Esquadrimar. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;  