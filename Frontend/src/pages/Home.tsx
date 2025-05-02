import React, { useRef, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  CardActions,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import WeekendIcon from '@mui/icons-material/Weekend';

// Caminho do vídeo no diretório público
const bannerVideoPath = `${process.env.PUBLIC_URL}/assets/esquadrimar-new-video.mp4`;

// Caminho da logo da empresa
const logoPath = `${process.env.PUBLIC_URL}/assets/Verde_Esquadrimar.png`;

// URLs para imagens temporárias de serviços
const marcenariaImgUrl = `${process.env.PUBLIC_URL}/assets/marcenaria-temp.jpg`;
const serralheriaImgUrl = `${process.env.PUBLIC_URL}/assets/serralheria-temp.jpg`;
const marmorariaImgUrl = `${process.env.PUBLIC_URL}/assets/marmoraria-temp.jpg`;

// Imagens para os serviços - substitua pelos caminhos reais
const services = [
  {
    id: 1,
    title: 'Marcenaria',
    description: 'Criamos móveis e estruturas de madeira personalizados, com acabamento impecável e design exclusivo.',
    icon: <WeekendIcon fontSize="large" color="primary" />,
    image: marcenariaImgUrl,
    link: '/servicos/marcenaria'
  },
  {
    id: 2,
    title: 'Serralheria',
    description: 'Fabricamos produtos em aluminio como janelas, persianas, portas, grades, portões, muito mais, com resistência e durabilidade.',
    icon: <BuildIcon fontSize="large" color="primary" />,
    image: serralheriaImgUrl,
    link: '/servicos/serralheria'
  },
  {
    id: 3,
    title: 'Marmoraria',
    description: 'Trabalhamos com mármores, granitos, laminas ultra-compactas e outras pedras para criar bancadas, pisos, revestimentos e peças exclusivas.',
    icon: <HandymanIcon fontSize="large" color="primary" />,
    image: marmorariaImgUrl,
    link: '/servicos/marmoraria'
  }
];

const Home: React.FC = () => {
  // Referência para o elemento de vídeo
  const videoRef = useRef<HTMLVideoElement>(null);

  // Efeito para configurar o vídeo quando o componente for montado
  useEffect(() => {
    console.log('Home component mounted');
    document.title = 'Esquadrimar - Home';
    
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      videoRef.current.play().catch(error => {
        console.error("Erro ao reproduzir vídeo automaticamente:", error);
      });
    }
  }, []);

  return (
    <Box>
      {/* Banner Principal com Vídeo e Logo */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '80vh' },
          width: '100%',
          overflow: 'hidden',
          mb: 6,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Container do Vídeo */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Vídeo de fundo */}
          <Box
            component="video"
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              backgroundColor: 'black',
              zIndex: 0
            }}
          >
            <source src={bannerVideoPath} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </Box>
        </Box>
        
        {/* Overlay escuro para aumentar visibilidade da logo */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1
          }}
        />

        {/* Logo sobreposta ao vídeo */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <Box
            component="img"
            src={logoPath}
            alt="Logo Esquadrimar"
            sx={{
              maxWidth: { xs: '80%', sm: '60%', md: '50%' },
              height: 'auto',
              opacity: 0.9,
              filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.5))',
              mb: 4
            }}
          />
          <Button 
            variant="contained" 
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contato"
            sx={{ 
              py: 1.5,
              px: 4,
              fontSize: { xs: '0.9rem', md: '1.1rem' }
            }}
          >
            Solicitar orçamento
          </Button>
        </Box>
      </Box>

      {/* Sobre Nós - Resumo */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Sobre a Esquadrimar
          </Typography>
          <Divider sx={{ width: '80px', margin: '0 auto', mb: 3, borderWidth: 2 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
             Prestando um serviço de altissimo padrão, a Esquadrimar entrega a seus clientes peças unicas, 
            feitas com os melhores produtos relacionados a marmoraria, serralheria e marcenaria. Um trabalho 
            de excelencia que vem se ampliando desde a sua criação em 2006, e hoje já é reconhecida como uma 
            das maiores empresas do ramo na Baixada Santista.
          </Typography>
          <Button 
            component={RouterLink} 
            to="/sobre" 
            color="primary"
            sx={{ mt: 2 }}
          >
            Conheça nossa história
          </Button>
        </Box>
      </Container>

      {/* Nossos Serviços */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Nossos Serviços
          </Typography>
          <Divider sx={{ width: '80px', margin: '0 auto', mb: 5, borderWidth: 2 }} />
          
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} md={4} key={service.id}>
                <Card sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {service.icon}
                      <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small" 
                      color="primary"
                      component={RouterLink}
                      to={service.link}
                    >
                      Saiba mais
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary"
              component={RouterLink}
              to="/servicos"
              size="large"
            >
              Ver todos os serviços
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          textAlign: 'center',
          mt: 8
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Pronto para transformar seu projeto em realidade?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            Entre em contato conosco para um orçamento sem compromisso.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contato"
            sx={{ 
              py: 1.5,
              px: 4
            }}
          >
            Solicitar orçamento
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 