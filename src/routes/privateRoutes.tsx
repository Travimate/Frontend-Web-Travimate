import LayoutAdmin from "../components/layout-admin/layout";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/auth";
import AuthAdmin from "../utils/authAdmin";
import LayoutClient from "../components/layout-clients/layout";

export function PrivateRoute() {
  if (!Auth.isAuthorization()) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <>
      <Outlet />
    </>
  );
}

export function PrivateRouteAdmin() {
  // if (!AuthAdmin.isAuthorization()) {
  //   return <Navigate to="/login" replace />;
  // }
  return (
    <LayoutAdmin>
      <Outlet />
    </LayoutAdmin>
  );
}