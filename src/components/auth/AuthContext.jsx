import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedEmail = localStorage.getItem("email");
    if (token && storedRole && storedEmail) {
      setIsLoggedIn(true);
      setRole(storedRole);
      setEmail(storedEmail);
    }
    setIsLoading(false);
  }, []);

  const login = (token, role, userEmail) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("email", userEmail);
    setIsLoggedIn(true);
    setRole(role);
    setEmail(userEmail);
  };

  const signup = (token, role, userEmail) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("email", userEmail);
    setIsLoggedIn(true);
    setRole(role);
    setEmail(userEmail);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setRole(null);
    setEmail(null);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, signup, logout, role, email }}
    >
      {children}
    </AuthContext.Provider>
  );
};
