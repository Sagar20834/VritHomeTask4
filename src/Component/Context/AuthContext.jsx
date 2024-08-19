// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/verify", { headers: { Authorization: `Bearer ${token}` } })
        .then((response) =>
          setAuthState({ isAuthenticated: true, user: response.data.user })
        )
        .catch(() => setAuthState({ isAuthenticated: false, user: null }));
    }
  }, []);

  const login = (username, password) => {
    return axios
      .post("/api/login", { username, password })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
        return axios.get("/api/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
      .then((response) =>
        setAuthState({ isAuthenticated: true, user: response.data.user })
      );
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthState({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
