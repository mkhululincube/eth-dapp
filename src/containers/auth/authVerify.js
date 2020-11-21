import React from 'react';
import {getToken} from './getTokens';
import {
    Route,
    Redirect,
  } from "react-router-dom";

const AuthVerify = ({ children, ...rest }) => {
    const adminToken = getToken();
     return (
        <Route
        {...rest}
        render={({ location }) =>
        adminToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AuthVerify;