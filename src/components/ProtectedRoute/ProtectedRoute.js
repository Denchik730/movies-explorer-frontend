import React from 'react';
import { Navigate } from "react-router-dom";

import { PAGES } from '../../utils/constants';

const ProtectedRoute = ({ element: Component, ...props  }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to={PAGES.PAGE_MAIN} replace/>
  );
};

export default ProtectedRoute;
