import React, { useRef, useEffect, useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Fade
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryIcon from '@mui/icons-material/History';
import StarIcon from '@mui/icons-material/Star';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// Caminho do vídeo no diretório público
const bannerVideoPath = `${process.env.PUBLIC_URL}/assets/esquadrimar-video.mp4`;

const About: React.FC = () => {
  // Referência para o elemento de vídeo
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Estados para controlar o vídeo
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Funções para controlar a reprodução do vídeo
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Erro ao reproduzir vídeo:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Função para ativar/desativar o áudio
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Efeito para configurar o vídeo quando o componente for montado
  useEffect(() => {
    console.log('About component mounted');
    document.title = 'Esquadrimar - Sobre';
    
    if (videoRef.current) {
      // Inicialmente mudo para evitar reprodução automática com áudio
      // (navegadores modernos bloqueiam reprodução automática com áudio)
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      
      // Inicia a reprodução do vídeo
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Erro ao reproduzir vídeo automaticamente:", error);
        setIsPlaying(false);
      });
      
      // Adiciona listener para atualizar o estado de reprodução
      videoRef.current.addEventListener('play', () => setIsPlaying(true));
      videoRef.current.addEventListener('pause', () => setIsPlaying(false));
    }
    
    // Cleanup function
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('play', () => setIsPlaying(true));
        videoRef.current.removeEventListener('pause', () => setIsPlaying(false));
      }
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Título da Página */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Sobre a Esquadrimar
        </Typography>
        <Divider sx={{ width: '80px', margin: '0 auto', mb: 3, borderWidth: 2 }} />
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Conheça a nossa história, nossa filosofia de trabalho e o que nos torna referência
          em marcenaria, serralheria e marmoraria na região da Baixada Santista.
        </Typography>
      </Box>

      {/* Nossa História */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <HistoryIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
              <Typography variant="h4" component="h2">
                Nossa História
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Typography variant="body1" paragraph>
              Fundada em 2006, a Esquadrimar nasceu do sonho de oferecer soluções completas e de alta qualidade 
              em marcenaria, serralheria e marmoraria para a região de Bertioga e Baixada Santista.
            </Typography>
            <Typography variant="body1" paragraph>
              O que começou como uma pequena oficina, hoje se transformou em uma empresa consolidada no mercado, 
              reconhecida pela excelência em seus produtos e serviços, comprometimento com prazos e, 
              principalmente, pela satisfação de seus clientes.
            </Typography>
            <Typography variant="body1">
              Ao longo desses anos, investimos constantemente em tecnologia, capacitação da equipe e 
              processos de qualidade, sempre buscando superar as expectativas e entregar resultados 
              excepcionais em cada projeto.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Vídeo Institucional */}
          <Paper 
            elevation={3} 
            sx={{ 
              overflow: 'hidden', 
              height: '100%', 
              minHeight: '300px',
              position: 'relative'
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                bgcolor: 'black'
              }}
            >
              <Box
                component="video"
                ref={videoRef}
                autoPlay
                loop
                controls={false}
                playsInline
                onClick={togglePlay}
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  cursor: 'pointer'
                }}
              >
                <source src={bannerVideoPath} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </Box>

              {/* Controles customizados do vídeo */}
              <Fade in={isHovering || !isPlaying}>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 1
                  }}
                >
                  <Tooltip title={isPlaying ? "Pausar" : "Reproduzir"}>
                    <IconButton
                      onClick={togglePlay}
                      color="inherit"
                      sx={{ color: 'white' }}
                    >
                      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                  </Tooltip>
                  
                  <Typography variant="caption" sx={{ color: 'white' }}>
                    Vídeo Institucional Esquadrimar
                  </Typography>

                  <Tooltip title={isMuted ? "Ativar áudio" : "Desativar áudio"}>
                    <IconButton
                      onClick={toggleMute}
                      color="inherit"
                      sx={{ color: 'white' }}
                    >
                      {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                    </IconButton>
                  </Tooltip>
                </Box>
              </Fade>

              {/* Ícone de play centralizado quando o vídeo está pausado */}
              {!isPlaying && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={togglePlay}
                >
                  <PlayArrowIcon sx={{ fontSize: 60, color: 'white' }} />
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Missão, Visão e Valores */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <StarIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
            <Typography variant="h4" component="h2">
              Missão, Visão e Valores
            </Typography>
          </Box>
          <Divider sx={{ width: '150px', margin: '0 auto', mb: 5 }} />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                Missão
              </Typography>
              <Typography variant="body1">
                Oferecer soluções inovadoras e de alta qualidade em marcenaria, serralheria e 
                marmoraria, superando as expectativas dos nossos clientes através de produtos 
                duráveis, funcionais e esteticamente impecáveis.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                Visão
              </Typography>
              <Typography variant="body1">
                Ser reconhecida como referência em qualidade, inovação e sustentabilidade no setor, 
                expandindo nossa atuação para outras regiões do estado de São Paulo, mantendo sempre 
                o compromisso com a excelência em cada projeto.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                Valores
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Excelência em qualidade" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Compromisso com prazos" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Ética e transparência" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Inovação constante" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Responsabilidade ambiental" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Nossa Equipe - Seção Simplificada */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <GroupsIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
          <Typography variant="h4" component="h2">
            Nossa Equipe
          </Typography>
        </Box>
        <Divider sx={{ mb: 4 }} />
        
        <Typography variant="body1" paragraph>
          Nossa equipe é formada por profissionais altamente qualificados e experientes, apaixonados pelo que fazem. 
          Acreditamos que o talento e a dedicação de cada colaborador são essenciais para a entrega de produtos 
          e serviços de excelência.
        </Typography>
      </Box>

      {/* Diferenciais */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Nossos Diferenciais
        </Typography>
        <Divider sx={{ mb: 4 }} />
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Atendimento Personalizado" 
                  secondary="Cada cliente é único e merece um atendimento exclusivo e diferenciado."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Materiais de Primeira Linha" 
                  secondary="Utilizamos apenas os melhores materiais disponíveis no mercado."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Garantia em Todos os Serviços" 
                  secondary="Oferecemos garantia em todos os nossos produtos e serviços."
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Tecnologia Avançada" 
                  secondary="Investimos em maquinário e tecnologia de ponta para garantir precisão e qualidade."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Soluções Integradas" 
                  secondary="Oferecemos serviços completos de marcenaria, serralheria e marmoraria em um só lugar."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Sustentabilidade" 
                  secondary="Comprometidos com práticas sustentáveis e responsáveis em todos os processos."
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;