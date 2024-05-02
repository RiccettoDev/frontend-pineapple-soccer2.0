import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./util";
import { Api } from "../../services/api";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    const user = getUserLocalStorage()

    if (user) {
      setUser(user)
    }
  }, [])

  async function authenticate(email: string, password: string) {

    try {
      // Carregar dados do arquivo db.json
      const response = await Api.get('/users');

      // Verificar se existe um usuário com o email e senha fornecidos
      const authenticatedUser = response.data.users.find(
        (user: IUser) => user.email === email && user.password === password
      );

      if (authenticatedUser) {
        // Autenticar usuário se encontrado no arquivo db.json
        setUser(authenticatedUser);
        setUserLocalStorage(authenticatedUser);
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error authenticating:", error);
      throw error;
    }
  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}