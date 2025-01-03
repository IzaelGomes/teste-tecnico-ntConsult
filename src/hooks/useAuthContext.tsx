import { useContext } from "react";
import { AuthContext, TAuthContext } from "../contexts/authContext";

export const useAuthContext = (): TAuthContext => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("");

  return {
    handleUserSignIn: context.handleUserSignIn,
    username: context.username,
  };
};
