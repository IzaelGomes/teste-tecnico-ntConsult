import "./style.css";
import {
  DragonForm,
  DragonFormData,
} from "../../components/DragonForm/dragonForm";
import { useCreateDragon } from "../../services/hooks/useCreateDragon";

export const CreateDragon = () => {
  const { mutateAsync: createDragonMutate } = useCreateDragon();

  const handleCreateDragon = async (dragonData: DragonFormData) => {
    await createDragonMutate({
      name: dragonData.name,
      type: dragonData.type,
      createdAt: new Date().toString(),
      histories: [],
    });
  };

  return (
    <div className="create-dragon">
      <h1 className="create-dragon__title">Criar Dragão</h1>
      <DragonForm onSubmit={handleCreateDragon} />
    </div>
  );
};
