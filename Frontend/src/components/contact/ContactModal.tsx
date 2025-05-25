import React from 'react';
import { 
  Modal, 
  Paper, 
  Box, 
  Typography, 
  Button, 
  Stack, 
  IconButton,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

// URL do WhatsApp
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5513996227222&text=Olá!%20Vim%20pelo%20site%20da%20Esquadrimar%20e%20gostaria%20de%20solicitar%20um%20orçamento.';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
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
          <IconButton onClick={onClose} aria-label="fechar">
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
              onClose();
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
  );
};

export default ContactModal; 