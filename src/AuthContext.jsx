import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
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

  function register({ nome, email, password }) {
    const users = getUsersFromStorage();
    if (users.find((u) => u.email === email)) {
      throw new Error("Já existe uma conta com este email.");
    }
    const newUser = { nome, email, password, avatar: "" };
    users.push(newUser);
    saveUsersToStorage(users);
    setUser({ nome, email, avatar: "" });
  }

  function login({ email, password }) {
    const users = getUsersFromStorage();
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) {
      throw new Error("Email ou senha incorretos.");
    }
    setUser({
      nome: found.nome,
      email: found.email,
      avatar: found.avatar || "",
    });
  }

  function logout() {
    setUser(null);
    setFavorites([]);
  }

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
        login,
        logout,
        register,
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

function getUsersFromStorage() {
  try {
    const stored = localStorage.getItem("tf_users");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveUsersToStorage(users) {
  localStorage.setItem("tf_users", JSON.stringify(users));
}
