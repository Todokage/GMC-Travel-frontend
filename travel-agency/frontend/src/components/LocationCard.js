import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LocationCard = ({ location }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={location.imageUrl}
        alt={location.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {location.title}, {location.country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location.description.substring(0, 100)}...
        </Typography>
      </CardContent>
      <Button 
        component={Link}
        to={`/visit/${location.title.toLowerCase()}`}
        size="small"
        sx={{ m: 1, alignSelf: 'flex-start' }}
      >
        Learn More
      </Button>
    </Card>
  );
};

export default LocationCard;