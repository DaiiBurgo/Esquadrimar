import React, { useState, useEffect, useRef } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Chip,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContactModal from '../components/contact/ContactModal';

// Interface para o tipo de projeto
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  additionalImages?: string[];
  location?: string;
  year?: string;
}

// Projetos de exemplo - substitua por projetos reais
const projects: Project[] = [
  // Marcenaria
  {
    id: 1,
    title: 'Móveis Planejados - Residência Bertioga',
    description: 'Projeto completo de móveis planejados para apartamento de alto padrão, incluindo cozinha, área gourmet, quartos, sala de estar e lavanderia.',
    category: 'marcenaria',
    image: '/assets/temp-marcenaria-1.jpg',
    additionalImages: [
      '/assets/temp-marcenaria-1a.jpg',
      '/assets/temp-marcenaria-1b.jpg',
      '/assets/temp-marcenaria-1c.jpg',
      '/assets/temp-marcenaria-1d.jpg',
      '/assets/temp-marcenaria-1e.jpg'
    ],
    location: 'Bertioga - SP',
    year: '2025'
  },
  {
    id: 2,
    title: 'Sala de Cinema e Sala de TV',
    description: 'Projeto de Cinema em casa e sala de TV com móveis planejados para otimizar o espaço e proporcionar conforto durante o descanso e entretenimento.',
    category: 'marcenaria',
    image: '/assets/temp-marcenaria-2.jpg',
    additionalImages: [
      '/assets/temp-marcenaria-2a.jpg',
    ],
    location: 'Bertioga - SP',
    year: '2024'
  },
  {
    id: 3,
    title: 'Closet Planejado',
    description: 'Closet planejado com soluções inteligentes de organização, gavetas, prateleiras e cabideiros em madeira nobre.',
    category: 'marcenaria',
    image: '/assets/temp-marcenaria-3.jpg',
    additionalImages: [
      '/assets/temp-marcenaria-3a.jpg',
      '/assets/temp-marcenaria-3b.jpg',
    ],
    location: 'Guarujá - SP',
    year: '2024'
  },

  // Serralheria
  {
    id: 4,
    title: 'Fachada e Esquadrias - Condomínio Riviera',
    description: 'Projeto e instalação fachada com brise fixo, esquadrias de janelas e portas de alumínio com vidro temperado em todos os cômodos do condomínio de luxo.',
    category: 'serralheria',
    image: '/assets/temp-serralheria-1.jpg',
    additionalImages: [
      '/assets/temp-serralheria-1a.jpg',
      '/assets/temp-serralheria-1b.jpg',
      '/assets/temp-serralheria-1c.jpg',
      '/assets/temp-serralheria-1d.jpg',
      '/assets/temp-serralheria-1e.jpg'
    ],
    location: 'Bertioga - SP',
    year: '2025'
  },
  {
    id: 5,
    title: 'Portas, Janelas e Guarda-corpo em Alumínio e Vidro',
    description: 'Portas, janelas e guarda-corpo em alumínio com vidro temperado para garantir segurança sem comprometer a estética e a vista.',
    category: 'serralheria',
    image: '/assets/temp-serralheria-2.jpg',
    additionalImages: [
      '/assets/temp-serralheria-2a.jpg',
      '/assets/temp-serralheria-2b.jpg'
    ],
    location: 'São Vicente - SP',
    year: '2024'
  },
  {
    id: 6,
    title: 'Saunas de Luxo',
    description: 'Sauna de Luxo com acabamento premium, combinando segurança e design contemporâneo.',
    category: 'serralheria',
    image: '/assets/temp-serralheria-3.jpg',
    additionalImages: [
      '/assets/temp-serralheria-3a.jpg',
      '/assets/temp-serralheria-3b.jpg'
    ],
    location: 'Praia Grande - SP',
    year: '2024'
  },

  // Marmoraria
  {
    id: 7,
    title: 'Bancadas de Cozinha e Pias em Mármore',
    description: 'Bancadas em mármore para cozinha completa, incluindo ilha central e cubas esculpidas para banheiro.',
    category: 'marmoraria',
    image: '/assets/temp-marmoraria-1.jpg',
    additionalImages: [
      '/assets/temp-marmoraria-1a.jpg',
      '/assets/temp-marmoraria-1b.jpg',
      '/assets/temp-marmoraria-1c.jpg',
    ],
    location: 'Bertioga - SP',
    year: '2025'
  },
  {
    id: 8,
    title: 'Revestimento em Mármore',
    description: 'Revestimento de parede, nichos, lareiras, painéis e pisos em mármore, trazendo estilo e sofisticação aos ambientes.',
    category: 'marmoraria',
    image: '/assets/temp-marmoraria-2.jpg',
    additionalImages: [
      '/assets/temp-marmoraria-2a.jpg',
      '/assets/temp-marmoraria-2b.jpg'
    ],
    location: 'Guarujá - SP',
    year: '2024'
  },
  {
    id: 9,
    title: 'Escada em Mármore',
    description: 'Escada revestida em mármore para condomínio de luxo, com acabamento premium e iluminação embutida para maior segurança.',
    category: 'marmoraria',
    image: '/assets/temp-marmoraria-3.jpg',
    additionalImages: [
      '/assets/temp-marmoraria-3a.jpg',
      '/assets/temp-marmoraria-3b.jpg',
    ],
    location: 'Bertioga - SP',
    year: '2024'
  }
];

// Categorias disponíveis
const categories = [
  { label: 'Todos', value: 'all' },
  { label: 'Marcenaria', value: 'marcenaria' },
  { label: 'Serralheria', value: 'serralheria' },
  { label: 'Marmoraria', value: 'marmoraria' }
];

const Portfolio: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Estado para filtro de categoria
  const [currentCategory, setCurrentCategory] = useState('all');
  
  // Estado para modal de visualização
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Estado para modal de contato
  const [openContactModal, setOpenContactModal] = useState(false);

  // Filtrar projetos pela categoria selecionada
  const filteredProjects = currentCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === currentCategory);

  // Manipular mudança de categoria
  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentCategory(newValue);
  };

  // Abrir modal de projeto
  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // Fechar modal de projeto
  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  // Navegar entre imagens no modal
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.additionalImages) {
      const totalImages = 1 + (selectedProject.additionalImages.length || 0);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.additionalImages) {
      const totalImages = 1 + (selectedProject.additionalImages.length || 0);
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    }
  };

  // Obter a imagem atual para o modal
  const getCurrentImage = () => {
    if (!selectedProject) return '';
    
    if (currentImageIndex === 0) {
      return selectedProject.image;
    } else if (selectedProject.additionalImages) {
      return selectedProject.additionalImages[currentImageIndex - 1];
    }
    
    return selectedProject.image;
  };

  // Funções para abrir e fechar o modal de contato
  const handleOpenContactModal = () => setOpenContactModal(true);
  const handleCloseContactModal = () => setOpenContactModal(false);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Título da Página */}
      <Box sx={{ textAlign: 'center', mb: 6 }} id="portfolio-title">
        <Typography variant="h3" component="h1" gutterBottom>
          Nosso Portfólio
        </Typography>
        <Divider sx={{ width: '80px', margin: '0 auto', mb: 3, borderWidth: 2 }} />
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Conheça alguns dos nossos projetos realizados. Nossa galeria apresenta trabalhos 
          em marcenaria, serralheria e marmoraria, demonstrando a qualidade e a versatilidade 
          dos nossos serviços.
        </Typography>
      </Box>

      {/* Tabs para filtrar por categoria */}
      <Box sx={{ width: '100%', mb: 4 }}>
        <Tabs
          value={currentCategory}
          onChange={handleCategoryChange}
          variant={isMobile ? "scrollable" : "fullWidth"}
          scrollButtons={isMobile ? "auto" : false}
          allowScrollButtonsMobile
          centered={!isMobile}
          sx={{ mb: 3 }}
        >
          {categories.map((category) => (
            <Tab 
              key={category.value} 
              label={category.label} 
              value={category.value}
              sx={{ 
                fontWeight: 500,
                '&.Mui-selected': { fontWeight: 700 }
              }} 
            />
          ))}
        </Tabs>
      </Box>

      {/* Grade de Projetos */}
      <Grid container spacing={3}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    cursor: 'pointer'
                  }
                }}
                onClick={() => handleOpenProject(project)}
              >
                <Box sx={{ position: 'relative', paddingTop: '66.67%' }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    <Chip 
                      label={project.category} 
                      size="small" 
                      color="primary" 
                    />
                    {project.location && (
                      <Chip 
                        label={project.location} 
                        size="small" 
                        variant="outlined" 
                      />
                    )}
                    {project.year && (
                      <Chip 
                        label={project.year} 
                        size="small" 
                        variant="outlined" 
                      />
                    )}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenContactModal();
                    }}
                    sx={{ mt: 1 }}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography variant="h6" color="text.secondary">
                Nenhum projeto encontrado nesta categoria.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          textAlign: 'center',
          mt: 8,
          borderRadius: 2
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Gostou do que viu?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            Entre em contato conosco para discutir seu projeto e solicitar um orçamento.
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

      {/* Modal de Projeto */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseProject}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderRadius: 2,
            overflow: 'hidden',
            maxHeight: '90vh'
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleCloseProject}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedProject && (
            <Grid container>
              {/* Coluna da Imagem */}
              <Grid item xs={12} md={7}>
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{ position: 'relative', paddingTop: '66.67%' }}>
                    <Box
                      component="img"
                      src={getCurrentImage()}
                      alt={selectedProject.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        bgcolor: 'black'
                      }}
                    />
                  </Box>

                  {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                    <>
                      <IconButton
                        onClick={handlePrevImage}
                        sx={{
                          position: 'absolute',
                          left: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          bgcolor: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'rgba(0, 0, 0, 0.7)',
                          },
                          zIndex: 1
                        }}
                      >
                        <ArrowBackIosNewIcon />
                      </IconButton>
                      <IconButton
                        onClick={handleNextImage}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          bgcolor: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'rgba(0, 0, 0, 0.7)',
                          },
                          zIndex: 1
                        }}
                      >
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </>
                  )}
                </Box>
              </Grid>

              {/* Coluna das Informações */}
              <Grid item xs={12} md={5}>
                <Box sx={{ 
                  p: 3, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <Box>
                    <Typography variant="h4" gutterBottom>
                      {selectedProject.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {selectedProject.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                      <Chip 
                        label={selectedProject.category} 
                        color="primary" 
                      />
                      {selectedProject.location && (
                        <Chip 
                          label={selectedProject.location} 
                          variant="outlined" 
                        />
                      )}
                      {selectedProject.year && (
                        <Chip 
                          label={selectedProject.year} 
                          variant="outlined" 
                        />
                      )}
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleOpenContactModal}
                    sx={{ mt: 2 }}
                  >
                    Solicitar Orçamento
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de Contato */}
      <ContactModal 
        open={openContactModal}
        onClose={handleCloseContactModal}
      />
    </Container>
  );
};

export default Portfolio; 