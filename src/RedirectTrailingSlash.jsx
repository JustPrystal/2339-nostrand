import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

function RedirectTrailingSlash() {
  const location = useLocation();

  if (location.pathname !== "/" && location.pathname.endsWith("/")) {
    return <Navigate to={location.pathname.slice(0, -1)} replace />;
  }

  return <Outlet />;
}

export default RedirectTrailingSlash;