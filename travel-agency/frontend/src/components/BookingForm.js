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

const BookingForm = ({ location, package: pkg, themeColor }) => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object({
    travelers: Yup.number()
      .min(1, 'Must be at least 1 traveler')
      .required('Required'),
    startDate: Yup.date()
      .required('Required')
      .min(new Date(), 'Start date must be in the future'),
    endDate: Yup.date()
      .required('Required')
      .min(Yup.ref('startDate'), 'End date must be after start date'),
    specialRequests: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      travelers: 1,
      startDate: null,
      endDate: null,
      specialRequests: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({
        location,
        package: pkg.name,
        ...values,
        totalPrice: pkg.price * values.travelers
      });
      setSubmitted(true);
    },
  });

  if (submitted) {
    return (
      <Box sx={{ p: 3, border: `1px solid ${themeColor}`, borderRadius: 1 }}>
        <Typography variant="h6" gutterBottom>
          Booking Submitted!
        </Typography>
        <Typography>
          Your booking for {location} ({pkg.name} Package) has been received.
        </Typography>
      </Box>
    );
  }

  return (
    <Box 
      component="form" 
      onSubmit={formik.handleSubmit}
      sx={{ p: 3, border: `1px solid ${themeColor}`, borderRadius: 1 }}
    >
      <Typography variant="h6" gutterBottom>
        {pkg.name} Package
      </Typography>
      <Typography variant="body1" gutterBottom>
        ${pkg.price} per traveler
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="travelers"
            name="travelers"
            label="Number of Travelers"
            type="number"
            value={formik.values.travelers}
            onChange={formik.handleChange}
            error={formik.touched.travelers && Boolean(formik.errors.travelers)}
            helperText={formik.touched.travelers && formik.errors.travelers}
            InputProps={{
              inputProps: { min: 1 },
              endAdornment: <InputAdornment position="end">persons</InputAdornment>,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start Date"
              value={formik.values.startDate}
              onChange={(value) => formik.setFieldValue('startDate', value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                  helperText={formik.touched.startDate && formik.errors.startDate}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="End Date"
              value={formik.values.endDate}
              onChange={(value) => formik.setFieldValue('endDate', value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                  helperText={formik.touched.endDate && formik.errors.endDate}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="specialRequests"
            name="specialRequests"
            label="Special Requests"
            multiline
            rows={4}
            value={formik.values.specialRequests}
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Total: ${pkg.price * formik.values.travelers}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              backgroundColor: themeColor,
              '&:hover': { backgroundColor: themeColor }
            }}
          >
            Confirm Booking
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingForm;