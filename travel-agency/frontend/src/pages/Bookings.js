import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Grid, 
  InputAdornment,
  MenuItem
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const bookings = [
  {
    id: 1,
    location: 'Diani, Kenya',
    package: 'Premium',
    startDate: '2023-10-15',
    endDate: '2023-10-22',
    travelers: 2,
    totalPrice: 4400,
    status: 'Confirmed',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088'
  },
  {
    id: 2,
    location: 'Tokyo, Japan',
    package: 'Basic',
    startDate: '2023-11-05',
    endDate: '2023-11-12',
    travelers: 1,
    totalPrice: 1800,
    status: 'Pending',
    imageUrl: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3'
  }
];

const Bookings = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        My Bookings
      </Typography>
      
      {bookings.length === 0 ? (
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            You don't have any bookings yet
          </Typography>
          <Button 
            component={Link} 
            to="/" 
            variant="contained" 
            size="large"
            sx={{ mt: 2, backgroundColor: '#1a3a3a' }}
          >
            Explore Destinations
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {bookings.map((booking) => (
            <Grid item xs={12} key={booking.id}>
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
                  image={booking.imageUrl}
                  alt={booking.location}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" component="div">
                    {booking.location}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {booking.package} Package
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    <strong>Dates:</strong> {booking.startDate} to {booking.endDate}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Travelers:</strong> {booking.travelers}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Total Price:</strong> ${booking.totalPrice}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mt: 1,
                      color: booking.status === 'Confirmed' ? 'green' : 'orange'
                    }}
                  >
                    <strong>Status:</strong> {booking.status}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button size="small" sx={{ mr: 1 }}>View Details</Button>
                    <Button size="small" color="error">Cancel</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Bookings;