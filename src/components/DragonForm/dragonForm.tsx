import { TDragon } from "../../services/dragon-types";
import "./style.css";
export type DragonFormData = Pick<TDragon, "name" | "type">;

interface CreateDragonFormProps {
  onSubmit: (data: DragonFormData) => void;
  defaultDragonData?: DragonFormData;
}

export const DragonForm = ({ onSubmit, defaultDragonData }: CreateDragonFormProps) => {
  const handleSubmitDragon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { name, type } = Object.fromEntries(new FormData(form).entries());

    onSubmit({ name: name as string, type: type as string });
  };

  return (
    <form onSubmit={handleSubmitDragon} className="dragon__form">
      <div className="dragon__field">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          aria-label="name"
          name="name"
          id="name"
          required
          defaultValue={defaultDragonData?.name}
        />
      </div>

      <div className="dragon__field">
        <label htmlFor="type">Tipo:</label>
        <input
          aria-label="type"
          type="text"
          name="type"
          id="type"
          defaultValue={defaultDragonData?.type}
          required
        />
      </div>

      <button type="submit" className="dragon__button_submit">
        Enviar
      </button>
    </form>
  );
};
