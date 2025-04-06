import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
              Rua das Marmorarias, 123
              <br />
              Bairro Industrial
              <br />
              São Paulo - SP
              <br />
              CEP: 12345-678
            </Typography>
            <Typography variant="body2">
              Tel: (11) 1234-5678
              <br />
              Email: contato@esquadrimar.com.br
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