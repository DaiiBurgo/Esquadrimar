import React, { useState, useRef, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  CardActions, 
  Button, 
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import { Link as RouterLink } from 'react-router-dom';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ContactModal from '../components/contact/ContactModal';

// Imagens dos serviços
const marcenariaImgUrl = `${process.env.PUBLIC_URL}/assets/marcenaria-temp.jpg`;
const serralheriaImgUrl = `${process.env.PUBLIC_URL}/assets/serralheria-temp.jpg`;
const marmorariaImgUrl = `${process.env.PUBLIC_URL}/assets/marmoraria-temp.jpg`;

// Dados dos serviços
const services = [
  {
    id: 'marcenaria',
    title: 'Marcenaria',
    description: 'Móveis e estruturas de madeira personalizados, com acabamento impecável.',
    icon: <CarpenterIcon fontSize="large" color="primary" />,
    image: marcenariaImgUrl,
    longDescription: 'Nossa marcenaria oferece soluções completas para ambientes residenciais e comerciais, com móveis planejados que aliam funcionalidade, estética e durabilidade. Utilizamos madeiras nobres e materiais de primeira linha, garantindo acabamento impecável e peças exclusivas.',
    items: [
      "Móveis planejados residenciais e comerciais",
      "Portas e batentes de madeira",
      "Painéis decorativos",
      "Armários e closets personalizados",
      "Mesas, balcões e bancadas",
      "Móveis para áreas externas"
    ],
    differentials: [
      "Design personalizado conforme suas necessidades",
      "Materiais sustentáveis e de alta qualidade",
      "Acabamento perfeito com atenção aos detalhes",
      "Montagem profissional com garantia"
    ]
  },
  {
    id: 'serralheria',
    title: 'Serralheria',
    description: 'Produtos em alumínio com resistência, durabilidade e acabamento premium.',
    icon: <SquareFootIcon fontSize="large" color="primary" />,
    image: serralheriaImgUrl,
    longDescription: 'Nossa serralheria trabalha com alumínio de alta qualidade para criar estruturas resistentes, duráveis e com excelente acabamento estético. Fabricamos desde portas e janelas até estruturas complexas, sempre primando pela segurança e funcionalidade.',
    items: [
      "Esquadrias de alumínio",
      "Portas e janelas",
      "Guarda-corpos e corrimãos",
      "Portões residenciais e industriais",
      "Grades e estruturas de segurança",
      "Coberturas e pergolados"
    ],
    differentials: [
      "Alumínio de qualidade superior",
      "Precisão nas medidas e nos encaixes",
      "Sistemas com vedação perfeita",
      "Acabamento estético refinado",
      "Resistência a intempéries"
    ]
  },
  {
    id: 'marmoraria',
    title: 'Marmoraria',
    description: 'Trabalhos em mármore, granito e pedras para bancadas, pisos e revestimentos.',
    icon: <AccountBalanceIcon fontSize="large" color="primary" />,
    image: marmorariaImgUrl,
    longDescription: 'Nossa marmoraria oferece soluções elegantes e duradouras em mármore, granito, quartzo e pedras naturais para dar um acabamento sofisticado aos seus ambientes. Realizamos o corte preciso e o polimento perfeito para bancadas, pisos, escadas e peças especiais.',
    items: [
      "Bancadas para cozinhas e banheiros",
      "Pisos e revestimentos em pedras naturais",
      "Escadas e soleiras",
      "Tampos para mesas",
      "Pias e cubas esculpidas",
      "Lareiras e elementos decorativos"
    ],
    differentials: [
      "Grande variedade de pedras nacionais e importadas",
      "Corte computadorizado para máxima precisão",
      "Acabamentos diferenciados (boleado, meia-cana, etc.)",
      "Polimento de alto brilho",
      "Instalação profissional"
    ]
  }
];

const Services: React.FC = () => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  const handleOpenContactModal = () => setOpenContactModal(true);
  const handleCloseContactModal = () => setOpenContactModal(false);

  useEffect(() => {
    if (window.location.hash === '#topo') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Handle service-specific hash
    const hash = window.location.hash;
    if (hash && hash.includes('-details')) {
      const serviceId = hash.replace('#', '').replace('-details', '');
      setExpandedAccordion(serviceId);
      
      // Scroll to the accordion after a short delay to ensure it's rendered
      setTimeout(() => {
        const accordionElement = document.getElementById(hash.replace('#', ''));
        if (accordionElement) {
          accordionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }} id="topo">
        {/* Título da Página */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Nossos Serviços
          </Typography>
          <Divider sx={{ width: '80px', margin: '0 auto', mb: 3, borderWidth: 2 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Conheça os principais serviços oferecidos pela Esquadrimar. Trabalhamos com soluções completas 
            em marcenaria, serralheria e marmoraria para atender às suas necessidades com qualidade superior 
            e acabamento impecável.
          </Typography>
        </Box>

        {/* Cards de Serviços */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
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
                id={service.id}
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
                    <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Typography variant="body2">
                    {service.longDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    color="primary"
                    component={RouterLink}
                    to="/portfolio#portfolio-title"
                  >
                    Ver detalhes
                  </Button>
                  <Button 
                    size="small" 
                    color="secondary"
                    component={RouterLink}
                    to="/contato#topo"
                  >
                    Solicitar orçamento
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Detalhes dos Serviços */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Detalhes dos Serviços
          </Typography>
          <Divider sx={{ mb: 4 }} />

          {services.map((service) => (
            <Accordion 
              key={service.id} 
              id={`${service.id}-details`} 
              sx={{ mb: 2 }}
              expanded={expandedAccordion === service.id}
              onChange={handleAccordionChange(service.id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${service.id}-content`}
                id={`${service.id}-header`}
                sx={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.06)' }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {service.icon}
                  <Typography variant="h6" sx={{ ml: 2 }}>
                    {service.title}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      O que oferecemos:
                    </Typography>
                    <List>
                      {service.items.map((item, index) => (
                        <ListItem key={index} dense>
                          <ListItemIcon>
                            <CheckIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      Nossos diferenciais:
                    </Typography>
                    <List>
                      {service.differentials.map((differential, index) => (
                        <ListItem key={index} dense>
                          <ListItemIcon>
                            <CheckIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={differential} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

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
              Pronto para iniciar seu projeto?
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
        <ContactModal 
          open={openContactModal}
          onClose={handleCloseContactModal}
        />
      </Container>
    </Box>
  );
};

export default Services;