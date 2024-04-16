import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/auth";
import AuthAdmin from "../utils/authAdmin";

export function ProtectedRoute() {
  if (Auth.isAuthorization()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export function ProtectedRouteAdmin() {
  // if (AuthAdmin.isAuthorization()) {
  //   return <Navigate to="/admin-dashboard/dashboard" replace />;
  // }

  return <Outlet />;
}
