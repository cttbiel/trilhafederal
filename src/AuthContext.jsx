import React, { createContext, useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

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
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("tf_favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    // Busca o usuário autenticado ao iniciar
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user || null);
    });
    // Listener para mudanças de autenticação
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  function addFavorite(sigla) {
    setFavorites((prev) => (prev.includes(sigla) ? prev : [...prev, sigla]));
  }

  function removeFavorite(sigla) {
    setFavorites((prev) => prev.filter((f) => f !== sigla));
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
