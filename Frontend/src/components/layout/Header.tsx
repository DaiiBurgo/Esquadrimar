import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Theme,
  Tooltip
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import VerdeEsquadrimarLogo from '../../assets/Verde_Esquadrimar.png';

// URL do WhatsApp
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5513996227222&text=Olá!%20Vim%20pelo%20site%20da%20Esquadrimar.';

// Caminho da logo
const LOGO_PATH = `${process.env.PUBLIC_URL}/assets/Verde_Esquadrimar.png`;

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Portfólio', path: '/portfolio' },
  { name: 'Contato', path: '/contato' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2, px: 2 }}>
        <Box
          component="img"
          src={LOGO_PATH}
          alt="Logo Esquadrimar"
          sx={{
            maxWidth: '180px',
            height: 'auto'
          }}
        />
      </Box>
      <List>
        {navigationLinks.map((item) => (
          <ListItem 
            key={item.name} 
            component={RouterLink} 
            to={item.path}
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        <ListItem 
          component="a"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            textDecoration: 'none', 
            color: '#25D366',
            '&:hover': {
              backgroundColor: 'rgba(37, 211, 102, 0.1)'
            }
          }}
        >
          <WhatsAppIcon sx={{ mr: 1 }} />
          <ListItemText primary="Fale conosco" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ py: 1 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box
            component="img"
            src={LOGO_PATH}
            alt="Logo Esquadrimar"
            sx={{
              width: { xs: 120, sm: 150, md: 180 },
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </Box>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navigationLinks.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  sx={{ ml: 2 }}
                >
                  {item.name}
                </Button>
              ))}
              <Tooltip title="Fale conosco pelo WhatsApp">
                <Button
                  component="a"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  sx={{ 
                    ml: 2,
                    bgcolor: '#25D366',
                    '&:hover': {
                      bgcolor: '#128C7E'
                    }
                  }}
                >
                  Fale Conosco
                </Button>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 