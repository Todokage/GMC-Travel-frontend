import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import AuthForm from '../components/AuthForm';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (values) => {
    console.log('Login submitted:', values);
    // In a real app, you would call your authentication API here
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Sign In
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 3 }}>
          Welcome back! Please sign in to your account.
        </Typography>
        
        <AuthForm isLogin={true} onSubmit={handleSubmit} />
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
            <Typography variant="body2" color="text.secondary">
              Forgot password?
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;