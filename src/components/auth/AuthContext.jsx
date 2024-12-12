// 로컬 스토리지 연동을 통해 사용자 인증 상태(로그인/로그아웃, 역할, 이메일)를 관리하고,
// 이를 AuthContext로 제공하는 컨텍스트 프로바이더

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
