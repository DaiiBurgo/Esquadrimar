import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import LoginForm from '../components/login/LoginForm';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <LoginForm />
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default Contact; 