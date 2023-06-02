import { useState, useEffect, createContext } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem("authToken");
      if (storageUser) {
        try {
          api.defaults.headers["Authorization"] = `Bearer ${storageUser}`;
          const response = await api.get("/user");
          setUser(response.data);
        } catch (error) {
          console.log("Erro ao carregar usuário", error);
        }
      }
    }
    loadUser();
  }, []);

  async function signUp(userData) {
    try {
      const response = await api.post("/users", userData);
      console.log(response.data);
    } catch (error) {
      console.log("Erro ao cadastrar", error);
    }
  }

  async function signIn(email, password) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      const { id, name, token } = response.data;
      setUser({ id, name, email });
      localStorage.setItem("authToken", token);
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      return true;
    } catch (error) {
      console.log("Erro ao fazer login ", error);
      return false;
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
