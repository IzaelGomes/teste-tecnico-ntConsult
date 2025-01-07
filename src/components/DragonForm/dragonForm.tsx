import { TDragon } from "../../services/dragon-types";
import "./style.css";
export type DragonFormData = Pick<TDragon, "name" | "type">;

interface CreateDragonFormProps {
  onSubmit: (data: DragonFormData) => void;
  dragonData?: DragonFormData;
}

export const DragonForm = ({ onSubmit, dragonData }: CreateDragonFormProps) => {
  const handleSubmitDragon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { name, type } = Object.fromEntries(new FormData(form).entries());

    onSubmit({ name: name as string, type: type as string });
  };

  return (
    <form onSubmit={handleSubmitDragon} className="create-dragon__form">
      <div className="create-dragon__field">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          aria-label="name"
          name="name"
          id="name"
          required
          defaultValue={dragonData?.name}
        />
      </div>

      <div className="create-dragon__field">
        <label htmlFor="type">Tipo:</label>
        <input
          aria-label="type"
          type="text"
          name="type"
          id="type"
          defaultValue={dragonData?.type}
          required
        />
      </div>

      <button type="submit" className="create-dragon__button">
        Enviar
      </button>
    </form>
  );
};
