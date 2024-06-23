import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const PrivateRoute = ({ element }) => {
  return AuthService.isAuthenticated() ? element : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
