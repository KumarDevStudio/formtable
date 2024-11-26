import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Predefined credentials
  const predefinedCredentials = { username: "admin", password: "password123" };

  // Check localStorage for authentication status on component mount
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username, password) => {
    if (
      username === predefinedCredentials.username &&
      password === predefinedCredentials.password
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // Save to localStorage
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Remove from localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
