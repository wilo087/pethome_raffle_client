import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any): JSX.Element => (
  <Route
    {...rest}
    render={(props): JSX.Element => (localStorage.getItem('token') ? (
      <Component
        {...props}
      />
    ) : (
      <Redirect to="/login" />
    ))}
  />
);

export default PrivateRoute;
