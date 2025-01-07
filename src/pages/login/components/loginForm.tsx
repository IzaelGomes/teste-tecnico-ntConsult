import "./style.css";

export type UserCredentials = {
  user: string;
  password: string;
};

interface LoginForm {
  onSubmit: (data: UserCredentials) => void;
}

export const LoginForm = ({ onSubmit }: LoginForm) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );

    onSubmit({
      user: username as string,
      password: password as string,
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-form__title">Bem vindo ao Dragon World!</h1>
      <div className="login-form__group">
        <label htmlFor="username" className="login-form__label">
          Usuário
        </label>
        <input
          className="login-form__input"
          type="text"
          id="username"
          aria-label="username"
          name="username"
          placeholder="Digite seu usuário"
          required
        />
      </div>
      <div className="login-form__group">
        <label htmlFor="password" className="login-form__label">
          Senha
        </label>
        <input
          className="login-form__input"
          type="password"
          id="password"
          aria-label="password"
          name="password"
          placeholder="Digite sua senha"
          required
        />
      </div>
      <button type="submit" className="login-form__button">
        Entrar
      </button>
    </form>
  );
};
