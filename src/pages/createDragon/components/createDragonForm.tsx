import { TDragon } from "../../../services/dragon-types";
import "./style.css";
export type DragonFormData = Pick<TDragon, "name" | "type">;

interface CreateDragonFormProps {
  onCreate: (data: DragonFormData) => void;
}

export const CreateDragonForm = ({ onCreate }: CreateDragonFormProps) => {
  const handleCreateDragon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { name, type } = Object.fromEntries(new FormData(form).entries());

    onCreate({ name: name as string, type: type as string });
  };

  return (
    <form onSubmit={handleCreateDragon} className="create-dragon__form">
      <div className="create-dragon__field">
        <label htmlFor="name">Nome:</label>
        <input type="text" aria-label="name" name="name" id="name" required />
      </div>

      <div className="create-dragon__field">
        <label htmlFor="type">Tipo:</label>
        <input aria-label="type" type="text" name="type" id="type" required />
      </div>

      <button type="submit" className="create-dragon__button">
        Enviar
      </button>
    </form>
  );
};
