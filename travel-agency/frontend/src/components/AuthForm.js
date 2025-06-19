import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  TextField, 
  Button, 
  Typography, 
  Box,
  Link,
  Divider
} from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';

const AuthForm = ({ isLogin, onSubmit }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
    ...(!isLogin && {
      name: Yup.string().required('Required')
    })
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      ...(!isLogin && { name: '' })
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
      {!isLogin && (
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      )}
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus={isLogin}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: '#1a3a3a' }}
      >
        {isLogin ? 'Sign In' : 'Sign Up'}
      </Button>

      <Divider sx={{ my: 2 }}>OR</Divider>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Google />}
          sx={{ color: '#DB4437', borderColor: '#DB4437' }}
        >
          Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Facebook />}
          sx={{ color: '#4267B2', borderColor: '#4267B2' }}
        >
          Facebook
        </Button>
      </Box>

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Link href="#" variant="body2">
          {isLogin 
            ? "Don't have an account? Sign Up" 
            : "Already have an account? Sign In"}
        </Link>
      </Box>
    </Box>
  );
};

export default AuthForm;