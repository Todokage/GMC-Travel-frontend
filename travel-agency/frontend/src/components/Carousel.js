import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const locations = [
  {
    id: 1,
    title: 'Diani, Kenya',
    description: 'Beautiful beaches and amazing wildlife',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088',
    themeColor: '#20b2aa'
  },
  {
    id: 2,
    title: 'Tokyo, Japan',
    description: 'Vibrant city with rich culture',
    imageUrl: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3',
    themeColor: '#e75480'
  },
  {
    id: 3,
    title: 'Monaco',
    description: 'Luxury and glamour on the French Riviera',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    themeColor: '#e74c3c'
  }
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: dots => (
      <div
        style={{
          backgroundColor: 'transparent',
          borderRadius: '10px',
          padding: '10px',
          bottom: '20px'
        }}
      >
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: i === activeSlide ? locations[i].themeColor : '#ccc',
          transition: 'background-color 0.3s'
        }}
      />
    )
  };

  return (
    <Box sx={{ position: 'relative', mb: 4 }}>
      <Slider {...settings}>
        {locations.map((location) => (
          <Box key={location.id} sx={{ position: 'relative', height: '500px' }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${location.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                p: 3
              }}
            >
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                {location.title}
              </Typography>
              <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
                {location.description}
              </Typography>
              <Button
                component={Link}
                to={`/visit/${location.title.split(',')[0].toLowerCase()}`}
                variant="contained"
                size="large"
                sx={{ 
                  backgroundColor: location.themeColor,
                  '&:hover': { backgroundColor: location.themeColor }
                }}
              >
                Explore Now
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;