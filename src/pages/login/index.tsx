import "./style.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { LoginForm, UserCredentials } from "./components/loginForm";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { handleUserSignIn } = useAuthContext();
  const navigate = useNavigate();

  const onSubmitCredentials = (data: UserCredentials) => {
    const isSignedIn = handleUserSignIn(data);
    if (isSignedIn) return navigate("/dragons");
    alert("Usuário inválido.");
  };

  return (
    <div className="login">
      <div className="login__container">
        <LoginForm onSubmit={onSubmitCredentials} />
      </div>
    </div>
  );
};
