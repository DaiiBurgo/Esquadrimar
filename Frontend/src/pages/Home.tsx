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
  Divider,
  Paper
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import WeekendIcon from '@mui/icons-material/Weekend';
import marcenariaImg from '../assets/Marcenaria.jpeg';
import serralheriaImg from '../assets/Serralheria.jpeg';
import marmorariaImg from '../assets/Marmoraria.jpeg';
// Caminho do vídeo no diretório público em vez de importar
const bannerVideoPath = `${process.env.PUBLIC_URL}/assets/esquadrimar-video.mp4`;

// Imagens para os serviços - substitua pelos caminhos reais
const services = [
  {
    id: 1,
    title: 'Marcenaria',
    description: 'Criamos móveis e estruturas de madeira personalizados, com acabamento impecável e design exclusivo.',
    icon: <WeekendIcon fontSize="large" color="primary" />,
    image: marcenariaImg,
    link: '/servicos/marcenaria'
  },
  {
    id: 2,
    title: 'Serralheria',
    description: 'Fabricamos produtos em aluminio como janelas, persianas, portas, grades, portões, muito mais, com resistência e durabilidade.',
    icon: <BuildIcon fontSize="large" color="primary" />,
    image: serralheriaImg,
    link: '/servicos/serralheria'
  },
  {
    id: 3,
    title: 'Marmoraria',
    description: 'Trabalhamos com mármores, granitos, laminas ultra-compactas e outras pedras para criar bancadas, pisos, revestimentos e peças exclusivas.',
    icon: <HandymanIcon fontSize="large" color="primary" />,
    image: marmorariaImg,
    link: '/servicos/marmoraria'
  }
];

// Imagens para destaques do portfólio - substitua pelos caminhos reais
const featuredProjects = [
  {
    id: 1,
    title: 'Residência Villa Nova',
    description: 'Projeto completo de marcenaria e marmoraria para residência de alto padrão.',
    image: 'https://source.unsplash.com/random/600x400/?luxury,apartment'
  },
  {
    id: 2,
    title: 'Escritório Corporativo',
    description: 'Móveis e estruturas metálicas para escritório corporativo no centro empresarial.',
    image: 'https://source.unsplash.com/random/600x400/?office,modern'
  },
  {
    id: 3,
    title: 'Restaurante Giardino',
    description: 'Projeto completo com marcenaria, serralheria e marmoraria para restaurante.',
    image: 'https://source.unsplash.com/random/600x400/?restaurant'
  }
];

const Home: React.FC = () => {
  // Referência para o elemento de vídeo
  const videoRef = useRef<HTMLVideoElement>(null);

  // Efeito para configurar o vídeo quando o componente for montado
  useEffect(() => {
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
      {/* Banner Principal com Vídeo */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          mb: 6
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
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src={bannerVideoPath} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </Box>
        
        {/* Overlay escuro para melhorar a legibilidade do texto */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }}
        />
        
        {/* Conteúdo do banner */}
        <Container 
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2
          }}
        >
          <Box sx={{ color: 'white', textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Esquadrimar
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Excelência em marcenaria, serralheria e marmoraria
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              component={RouterLink}
              to="/contato"
              sx={{ 
                mr: 2, 
                mb: { xs: 2, sm: 0 },
                fontSize: '1.1rem',
                py: 1.5,
                px: 4
              }}
            >
              Fale Conosco
            </Button>
            <Button 
              variant="outlined" 
              color="primary"
              size="large"
              component={RouterLink}
              to="/portfolio"
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                py: 1.5,
                px: 4
              }}
            >
              Ver Portfólio
            </Button>
          </Box>
        </Container>
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
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
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

      {/* Destaques do Portfólio */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Projetos Recentes
        </Typography>
        <Divider sx={{ width: '80px', margin: '0 auto', mb: 5, borderWidth: 2 }} />
        
        <Grid container spacing={4}>
          {featuredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Paper 
                elevation={2}
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6
                  }
                }}
              >
                <Box
                  sx={{
                    height: 250,
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      p: 2
                    }}
                  >
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2">{project.description}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary"
            component={RouterLink}
            to="/portfolio"
            size="large"
          >
            Ver portfólio completo
          </Button>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          textAlign: 'center'
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