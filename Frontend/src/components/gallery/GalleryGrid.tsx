import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Modal,
  IconButton,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Definição de tipos para as imagens e categorias
interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Image {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  category: Category;
}

interface GalleryGridProps {
  images: Image[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (image: Image, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
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
              onClick={() => handleOpen(image, index)}
            >
              <CardMedia
                component="img"
                image={image.imageUrl}
                alt={image.title}
                sx={{ 
                  height: 200, 
                  objectFit: 'cover' 
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {image.title}
                </Typography>
                <Chip 
                  label={image.category.name} 
                  size="small" 
                  color="primary" 
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal para visualização da imagem */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box 
          sx={{ 
            position: 'relative',
            maxWidth: '90%',
            maxHeight: '90%',
            bgcolor: 'background.paper',
            border: 'none',
            boxShadow: 24,
            p: 0,
            outline: 'none',
            borderRadius: 1,
            overflow: 'hidden'
          }}
        >
          {selectedImage && (
            <>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  sx={{ 
                    maxHeight: '75vh',
                    objectFit: 'contain',
                    width: '100%',
                    backgroundColor: 'black'
                  }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 8,
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                  onClick={handlePrev}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 8,
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                  onClick={handleNext}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" component="h2">
                  {selectedImage.title}
                </Typography>
                {selectedImage.description && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {selectedImage.description}
                  </Typography>
                )}
                <Chip 
                  label={selectedImage.category.name} 
                  size="small" 
                  color="primary" 
                  sx={{ mt: 1 }}
                />
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default GalleryGrid; 