import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./util";

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
    //const response = await LoginRequest(email, password)

    //const payLoad = {token: response.token, email}

    //setUser(payLoad)
    //setUserLocalStorage(payLoad)

    try {
      // Carregar dados do arquivo db.json
      const response = await fetch("http://91.108.126.64:3333/users");
      const data = await response.json();

      // Verificar se existe um usuário com o email e senha fornecidos
      const authenticatedUser = data.users.find(
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