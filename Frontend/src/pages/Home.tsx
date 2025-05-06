import React, { useRef, useEffect, useState } from 'react';
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
  Modal,
  Paper,
  IconButton,
  Stack
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import WeekendIcon from '@mui/icons-material/Weekend';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

// Caminho do vídeo no diretório público
const bannerVideoPath = `${process.env.PUBLIC_URL}/assets/esquadrimar-new-video.mp4`;

// Caminho da logo da empresa
const logoPath = `${process.env.PUBLIC_URL}/assets/Creme_Esquadrimar.png`;

// URLs para imagens temporárias de serviços
const marcenariaImgUrl = `${process.env.PUBLIC_URL}/assets/marcenaria-temp.jpg`;
const serralheriaImgUrl = `${process.env.PUBLIC_URL}/assets/serralheria-temp.jpg`;
const marmorariaImgUrl = `${process.env.PUBLIC_URL}/assets/marmoraria-temp.jpg`;

// URL do WhatsApp
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5513996227222&text=Olá!%20Vim%20pelo%20site%20da%20Esquadrimar%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

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
  
  // Estado para controlar a abertura do modal
  const [openContactModal, setOpenContactModal] = useState(false);

  // Funções para abrir e fechar o modal
  const handleOpenContactModal = () => setOpenContactModal(true);
  const handleCloseContactModal = () => setOpenContactModal(false);

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
        {/* Comentado temporariamente para ver como fica o banner sem a logo
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
              opacity: 0.95,
              filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.7))',
              transform: 'translateZ(20px)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateZ(30px) scale(1.02)',
              }
            }}
          />
        </Box>
        */}
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
            onClick={handleOpenContactModal}
            sx={{ 
              py: 1.5,
              px: 4
            }}
          >
            Solicitar Orçamento
          </Button>
        </Container>
      </Box>

      {/* Modal de Contato */}
      <Modal
        open={openContactModal}
        onClose={handleCloseContactModal}
        aria-labelledby="modal-contact"
        aria-describedby="modal-contact-options"
      >
        <Paper 
          sx={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 400 },
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            outline: 'none'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" component="h2" id="modal-contact">
              Como prefere entrar em contato?
            </Typography>
            <IconButton onClick={handleCloseContactModal} aria-label="fechar">
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Divider sx={{ mb: 3 }} />

          <Stack spacing={2}>
            <Button
              variant="contained"
              color="success"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              sx={{ py: 1.5 }}
            >
              Conversar pelo WhatsApp
            </Button>
            
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EmailIcon />}
              component={RouterLink}
              to={{
                pathname: "/contato",
                hash: "#formulario-contato"
              }}
              onClick={() => {
                handleCloseContactModal();
                setTimeout(() => {
                  const element = document.getElementById('formulario-contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              fullWidth
              sx={{ py: 1.5 }}
            >
              Enviar mensagem de e-mail
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </Box>
  );
};

export default Home; 