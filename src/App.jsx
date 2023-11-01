import React from "react";
import Layout from "./pages/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/index";
import Oquvchilar from "./pages/Dashboard/Oquvchilar/Oquvchilar";
import Kurslar from "./pages/Dashboard/Kurslar/Kurslar";
import DashHome from "./pages/Dashboard/DashHome/DashHome";
import Settings from "./pages/Dashboard/Settings/index";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="main" element={<DashHome />} />
          <Route path="students" element={<Oquvchilar />} />
          <Route path="kurslar" element={<Kurslar />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
