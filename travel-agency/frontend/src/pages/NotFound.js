import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
      <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
      <Typography variant="h3" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button 
        component={Link} 
        to="/" 
        variant="contained" 
        size="large"
        sx={{ backgroundColor: '#1a3a3a' }}
      >
        Go to Homepage
      </Button>
    </Container>
  );
};

export default NotFound;