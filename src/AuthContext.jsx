import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("tf_favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tf_favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(sigla) {
    setFavorites((prev) => (prev.includes(sigla) ? prev : [...prev, sigla]));
  }

  function removeFavorite(sigla) {
    setFavorites((prev) => prev.filter((f) => f !== sigla));
  }

  return (
    <AuthContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
