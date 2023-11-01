import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../Utility/login";

const PrivateRoute = () => {
  
    
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
