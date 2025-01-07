import { createContext, PropsWithChildren, useState } from "react";

export type TAuthContext = {
  username?: string;
  handleUserSignIn: (user: string, password: string) => boolean;
};

export const AuthContext = createContext<null | TAuthContext>(null);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<string | undefined>(() => {
    const user = localStorage.getItem("auth");
    if (user) return user;

    return;
  });

  const handleUserSignIn = (user: string, password: string) => {
    if (user === "admin" && password === "123456") {
      setUser("admin");
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
