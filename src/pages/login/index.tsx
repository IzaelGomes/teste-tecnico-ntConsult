import "./style.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import dragons from "../../assets/login-dragon.jpg";

export const Login = () => {
  const navigate = useNavigate();
  const { handleUserSignIn } = useAuthContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );

    if (handleUserSignIn(username as string, password as string)) {
      navigate("/dragons");

      return;
    }

    alert("Usuário inválido");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">Bem vindo ao Dragon World!</h1>
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Digite seu usuário"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        <div className="dragon-img">
          <img src={dragons} />
        </div>
      </div>
    </div>
  );
};
