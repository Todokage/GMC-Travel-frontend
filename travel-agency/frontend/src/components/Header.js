// frontend/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Flight, AccountCircle } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1a3a3a' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Flight sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              TravelEase
            </Link>
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/bookings">
            My Bookings
          </Button>
          <Button color="inherit" component={Link} to="/login" startIcon={<AccountCircle />}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;