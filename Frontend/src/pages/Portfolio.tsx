import React, { useState } from 'react';
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
    title: 'Móveis Planejados - Residência São Paulo',
    description: 'Projeto completo de móveis planejados para apartamento de alto padrão, incluindo cozinha, quartos e sala de estar.',
    category: 'marcenaria',
    image: 'https://source.unsplash.com/random/1200x800/?kitchen,furniture',
    additionalImages: [
      'https://source.unsplash.com/random/1200x800/?bedroom,furniture',
      'https://source.unsplash.com/random/1200x800/?livingroom,furniture',
      'https://source.unsplash.com/random/1200x800/?closet,wood'
    ],
    location: 'São Paulo - SP',
    year: '2023'
  },
  {
    id: 2,
    title: 'Home Office Personalizado',
    description: 'Projeto de escritório em casa com móveis planejados para otimizar o espaço e proporcionar conforto durante o trabalho.',
    category: 'marcenaria',
    image: 'https://source.unsplash.com/random/1200x800/?office,desk',
    location: 'Santos - SP',
    year: '2022'
  },
  {
    id: 3,
    title: 'Closet Planejado',
    description: 'Closet planejado com soluções inteligentes de organização, gavetas, prateleiras e cabideiros em madeira nobre.',
    category: 'marcenaria',
    image: 'https://source.unsplash.com/random/1200x800/?closet,wardrobe',
    location: 'Guarujá - SP',
    year: '2023'
  },

  // Serralheria
  {
    id: 4,
    title: 'Esquadrias de Alumínio - Condomínio Riviera',
    description: 'Projeto e instalação de janelas e portas de alumínio com vidro temperado em condomínio de luxo.',
    category: 'serralheria',
    image: 'https://source.unsplash.com/random/1200x800/?windows,aluminum',
    additionalImages: [
      'https://source.unsplash.com/random/1200x800/?door,design',
      'https://source.unsplash.com/random/1200x800/?glass,modern'
    ],
    location: 'Bertioga - SP',
    year: '2023'
  },
  {
    id: 5,
    title: 'Guarda-corpo em Alumínio',
    description: 'Guarda-corpo em alumínio com vidro temperado para garantir segurança sem comprometer a estética e a vista.',
    category: 'serralheria',
    image: 'https://source.unsplash.com/random/1200x800/?railing,glass',
    location: 'São Vicente - SP',
    year: '2022'
  },
  {
    id: 6,
    title: 'Portão Residencial',
    description: 'Portão em alumínio com acabamento premium, combinando segurança e design contemporâneo.',
    category: 'serralheria',
    image: 'https://source.unsplash.com/random/1200x800/?gate,modern',
    location: 'Praia Grande - SP',
    year: '2023'
  },

  // Marmoraria
  {
    id: 7,
    title: 'Bancadas de Cozinha em Granito',
    description: 'Bancadas em granito preto São Gabriel para cozinha completa, incluindo ilha central e cuba esculpida.',
    category: 'marmoraria',
    image: 'https://source.unsplash.com/random/1200x800/?countertop,kitchen',
    additionalImages: [
      'https://source.unsplash.com/random/1200x800/?sink,marble',
      'https://source.unsplash.com/random/1200x800/?granite,kitchen'
    ],
    location: 'Santos - SP',
    year: '2022'
  },
  {
    id: 8,
    title: 'Revestimento em Mármore',
    description: 'Revestimento de parede em mármore Carrara para área de lazer de condomínio, trazendo sofisticação ao ambiente.',
    category: 'marmoraria',
    image: 'https://source.unsplash.com/random/1200x800/?marble,wall',
    location: 'Guarujá - SP',
    year: '2023'
  },
  {
    id: 9,
    title: 'Escada em Granito',
    description: 'Escada revestida em granito branco com acabamento premium e iluminação embutida para maior segurança.',
    category: 'marmoraria',
    image: 'https://source.unsplash.com/random/1200x800/?stairs,stone',
    location: 'Bertioga - SP',
    year: '2022'
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

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Título da Página */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
                onClick={() => handleOpenProject(project)}
              >
                <CardMedia
                  component="img"
                  height={240}
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, pb: 2 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Box sx={{ mb: 1 }}>
                    <Chip
                      label={categories.find(cat => cat.value === project.category)?.label || project.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{ mr: 1, mb: 1 }}
                    />
                    {project.location && (
                      <Chip
                        label={project.location}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    )}
                    {project.year && (
                      <Chip
                        label={project.year}
                        size="small"
                        sx={{ mb: 1 }}
                      />
                    )}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {project.description.length > 100 
                      ? `${project.description.substring(0, 100)}...`
                      : project.description
                    }
                  </Typography>
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

      {/* Modal para visualização detalhada do projeto */}
      <Dialog
        open={!!selectedProject}
        onClose={handleCloseProject}
        maxWidth="lg"
        fullWidth
        fullScreen={isMobile}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleCloseProject}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Navegação de imagens */}
          {selectedProject?.additionalImages && selectedProject.additionalImages.length > 0 && (
            <>
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                  zIndex: 1
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}

          <Box sx={{ maxHeight: '70vh', display: 'flex', flexDirection: 'column' }}>
            <Box 
              sx={{ 
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black'
              }}
            >
              <Box
                component="img"
                src={getCurrentImage()}
                alt={selectedProject?.title}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>
            <Box sx={{ p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {selectedProject?.title}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Chip
                  label={categories.find(cat => cat.value === selectedProject?.category)?.label || selectedProject?.category}
                  color="primary"
                  sx={{ mr: 1, mb: 1 }}
                />
                {selectedProject?.location && (
                  <Chip label={selectedProject.location} sx={{ mr: 1, mb: 1 }} />
                )}
                {selectedProject?.year && (
                  <Chip label={selectedProject.year} sx={{ mb: 1 }} />
                )}
              </Box>
              <Typography variant="body1" paragraph>
                {selectedProject?.description}
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                href="/contato"
              >
                Quero um projeto similar
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Portfolio; 