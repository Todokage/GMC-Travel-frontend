import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import AuthForm from '../components/AuthForm';

const Register = () => {
  const handleSubmit = (values) => {
    console.log('Register submitted:', values);
    // In a real app, you would call your registration API here
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Create Account
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 3 }}>
          Join us today and start planning your dream vacations!
        </Typography>
        
        <AuthForm isLogin={false} onSubmit={handleSubmit} />
      </Paper>
    </Container>
  );
};

export default Register;