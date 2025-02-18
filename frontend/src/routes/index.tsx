import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Dashboard } from "../pages/Dashboard";
import Login from "../pages/Login";
import { Home } from "../pages/Home";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Default Route */}
        <Route path="*" element={"Not found"} /> {/* Handles unknown routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
