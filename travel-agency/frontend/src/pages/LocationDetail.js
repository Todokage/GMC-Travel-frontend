import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Divider, 
  Chip 
} from '@mui/material';
import BookingForm from '../components/BookingForm';

const locations = {
  diani: {
    title: 'Diani',
    country: 'Kenya',
    description: 'Diani Beach is a major beach on the Indian Ocean coast of Kenya. It is located 30 kilometers south of Mombasa, in Kwale County. It has been voted Africa\'s leading beach destination for the fifth time running since 2015.',
    attractions: ['Diani Beach', 'Colobus Conservation', 'Shimba Hills National Reserve'],
    bestTimeToVisit: 'June to October and December to March',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088',
    themeColor: '#20b2aa',
    packages: [
      {
        name: 'Basic',
        price: 1200,
        duration: '7 days',
        inclusions: ['Accommodation', 'Airport transfers', 'Breakfast']
      },
      {
        name: 'Premium',
        price: 2200,
        duration: '7 days',
        inclusions: ['Luxury accommodation', 'All meals', 'Safari tour', 'Spa treatments']
      }
    ]
  },
  tokyo: {
    title: 'Tokyo',
    country: 'Japan',
    description: 'Tokyo, Japan\'s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods.',
    attractions: ['Shibuya Crossing', 'Tokyo Tower', 'Senso-ji Temple', 'Meiji Shrine'],
    bestTimeToVisit: 'March to April and September to November',
    imageUrl: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3',
    themeColor: '#e75480',
    packages: [
      {
        name: 'Basic',
        price: 1800,
        duration: '7 days',
        inclusions: ['Accommodation', 'Airport transfers', 'City tour']
      },
      {
        name: 'Premium',
        price: 3200,
        duration: '10 days',
        inclusions: ['Luxury hotel', 'All meals', 'Guided tours', 'Bullet train pass']
      }
    ]
  },
  monaco: {
    title: 'Monaco',
    country: 'Monaco',
    description: 'Monaco is a tiny independent city-state on France\'s Mediterranean coastline known for its upscale casinos, yacht-lined harbor and prestigious Grand Prix motor race, which runs through Monaco\'s streets once a year.',
    attractions: ['Monte Carlo Casino', 'Prince\'s Palace', 'Oceanographic Museum', 'Larvotto Beach'],
    bestTimeToVisit: 'May to September',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    themeColor: '#e74c3c',
    packages: [
      {
        name: 'Basic',
        price: 2500,
        duration: '5 days',
        inclusions: ['4-star hotel', 'Breakfast', 'City tour']
      },
      {
        name: 'Premium',
        price: 4500,
        duration: '7 days',
        inclusions: ['5-star hotel', 'All meals', 'Casino pass', 'Yacht tour']
      }
    ]
  }
};

const LocationDetail = () => {
  const { location } = useParams();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const locationData = locations[location.toLowerCase()];

  if (!locationData) {
    return (
      <Container>
        <Typography variant="h4" align="center" sx={{ mt: 4 }}>
          Location not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {locationData.title}, {locationData.country}
        </Typography>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={locationData.imageUrl}
            alt={locationData.title}
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              {locationData.description}
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
              Top Attractions
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {locationData.attractions.map((attraction, index) => (
                <Chip key={index} label={attraction} color="primary" />
              ))}
            </Box>
            
            <Typography variant="body2" color="text.secondary">
              <strong>Best time to visit:</strong> {locationData.bestTimeToVisit}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Available Packages
          </Typography>
          
          <Grid container spacing={3}>
            {locationData.packages.map((pkg, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    border: selectedPackage?.name === pkg.name ? `2px solid ${locationData.themeColor}` : '1px solid #e0e0e0',
                    transition: 'border 0.3s'
                  }}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                      {pkg.name} Package
                    </Typography>
                    <Typography variant="h6" color="primary">
                      ${pkg.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {pkg.duration}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2">
                      <strong>Includes:</strong>
                    </Typography>
                    <ul>
                      {pkg.inclusions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
            Book Your Trip
          </Typography>
          
          {selectedPackage ? (
            <BookingForm 
              location={locationData.title} 
              package={selectedPackage} 
              themeColor={locationData.themeColor} 
            />
          ) : (
            <Typography variant="body1" color="text.secondary">
              Please select a package to book
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LocationDetail;