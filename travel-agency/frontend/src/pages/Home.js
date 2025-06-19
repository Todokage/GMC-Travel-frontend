import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Carousel from '../components/Carousel';
import LocationCard from '../components/LocationCard';


const locations = [
  {
    id: 1,
    title: 'Diani',
    country: 'Kenya',
    description: 'Diani Beach is a major beach on the Indian Ocean coast of Kenya. It is located 30 kilometers south of Mombasa, in Kwale County.',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088',
    themeColor: '#20b2aa'
  },
  {
    id: 2,
    title: 'Tokyo',
    country: 'Japan',
    description: 'Tokyo, Japan\'s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.',
    imageUrl: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3',
    themeColor: '#e75480'
  },
  {
    id: 3,
    title: 'Monaco',
    country: 'Monaco',
    description: 'Monaco is a tiny independent city-state on France\'s Mediterranean coastline known for its upscale casinos, yacht-lined harbor and prestigious Grand Prix motor race.',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    themeColor: '#e74c3c'
  },
  {
    id: 4,
    title: 'Dubai',
    country: 'UAE',
    description: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene.',
    imageUrl: 'https://images.unsplash.com/photo-1518684079-3c830dcef090',
    themeColor: '#ffd700'
  }
];

const Home = () => {
  return (
    <Box>
      <Carousel />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Popular Destinations
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
          Discover our most sought-after travel destinations around the world
        </Typography>
        
        <Grid container spacing={4}>
          {locations.map((location) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={location.id}>
              <LocationCard location={location} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;