import React from 'react';
import { Redirect, Route } from 'react-router-dom';


// Protected Route renders the component if the user is logged in. Otherwise, the user is redirected to /login

export default function PrivateRoute({
  component: Component,
  authed,
  ...rest
}) {
  console.log('rest:', rest) // element aqui
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}
