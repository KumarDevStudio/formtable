import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const App = () => {
  return (
    <AuthProvider>
      
      <Routes>
        {/* Define a route for "/" */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    
    </AuthProvider>
  );
};

export default App;
