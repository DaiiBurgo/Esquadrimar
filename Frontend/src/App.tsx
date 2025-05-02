import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, Typography } from '@mui/material';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

// Componente de debug para mostrar a rota atual
const RouteDebug = () => {
  const location = useLocation();
  console.log('Current route:', location.pathname);
  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        top: 0, 
        right: 0, 
        bgcolor: 'rgba(0,0,0,0.7)', 
        color: 'white', 
        p: 1, 
        zIndex: 9999 
      }}
    >
      <Typography variant="body2">
        Current Route: {location.pathname}
      </Typography>
    </Box>
  );
};

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#18332f', // Verde
      light: '#5472d3',
      dark: '#002171',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF9800', // Laranja
      light: '#ffc947',
      dark: '#c66900',
      contrastText: '#000000',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: 'hidden',
        },
      },
    },
  },
});

const App: React.FC = () => {
  console.log('App component rendered');
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <RouteDebug />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;