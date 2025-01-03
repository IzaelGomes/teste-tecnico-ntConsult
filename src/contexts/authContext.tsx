import { createContext, PropsWithChildren, useState } from "react";

export type TAuthContext = {
  username?: string;
  handleUserSignIn: (user: string, password: string) => boolean;
};

export const AuthContext = createContext<null | TAuthContext>(null);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<string>();

  const handleUserSignIn = (user: string, password: string) => {
    if (user === "admin" && password === "123456") {
      setUser("Dragão");
      localStorage.setItem("auth", user);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ username: user, handleUserSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
