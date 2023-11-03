import React from "react";
import Layout from "./pages/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/index";
import Oquvchilar from "./pages/Dashboard/Students/Oquvchilar";
import Kurslar from "./pages/Dashboard/Kurslar/Kurslar";
import DashHome from "./pages/Dashboard/DashHome/DashHome";
import Settings from "./pages/Dashboard/Settings/index";
import Customers from "./pages/Dashboard/customers/Customers";
import Services from "./pages/Dashboard/Services/Services";
import NotFound from './pages/NotFound/index'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route element={<PrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="main" element={<DashHome />} />
            <Route path="students" element={<Oquvchilar />} />
            <Route path="kurslar" element={<Kurslar />} />
            <Route path="customers" element={<Customers />} />
            <Route path="services" element={<Services />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
