import { Routes, Route } from "react-router-dom";
import { PrivateRoute, PrivateRouteAdmin } from "./privateRoutes";
import { ProtectedRoute, ProtectedRouteAdmin } from "./protectedRoutes";
import HomePage from "../pages/clients/home";
import RegisterClient from "../pages/clients/register";
import LoginClient from "../pages/clients/login";
import SearchPage from "../pages/clients/search";
import Payment from "../pages/clients/payment";
  
  const SetupRouters = () => {
    return (
      <Routes>
        {/*Landingpage Routes*/}
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterClient/>} />
        <Route path="/flight/search" element={<SearchPage/>} />
        <Route path="/flight/details" element={''} />

        {/* ini alfi */}
        <Route path="/payment" element={<Payment/>} />

        {/*Protected Routes*/}
        <Route path="/home" element={<PrivateRoute />}>
          <Route path="payment" element={''} />
          <Route path="profile" element={''} />
        </Route>
  
        {/*Private Routes*/}
        <Route path="/login" element={<ProtectedRoute />}>
          <Route index element={<LoginClient/>} />
        </Route>
  
        {/*Notfound Routes*/}
        <Route path="*" element={''} />


        {/* ==================================================================================== Admin ==================================================================================== */}
        {/*Protected Routes*/}
        <Route path="/dashboard" element={<PrivateRouteAdmin />}>
          <Route path="home" element={''} />
        </Route>
  
        {/*Private Routes*/}
        <Route path="/admin-login" element={<ProtectedRouteAdmin />}>
          <Route index element={''} />
        </Route>
      </Routes>
    );
  };
  
  export default SetupRouters;
  