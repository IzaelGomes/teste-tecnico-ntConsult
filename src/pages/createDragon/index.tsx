import { useMutation } from "react-query";
import { createDragon } from "../../services/dragon";
import "./style.css";
import {
  CreateDragonForm,
  DragonFormData,
} from "./components/createDragonForm";

export const CreateDragon = () => {
  const { mutateAsync: createDragonMutate } = useMutation({
    mutationFn: createDragon,
    onSuccess: () => {
      alert("Dragão criado com sucesso!");
    },
    onError: () => {
      console.log("Erro ao criar o dragão.");
    },
  });

  const handleCreateDragon = async (dragonData: DragonFormData) => {
    try {
      await createDragonMutate({
        name: dragonData.name,
        type: dragonData.type,
        createdAt: new Date().toString(),
        histories: [],
      });
    } catch (error) {
      console.error("Erro ao criar o dragão:", error);
    }
  };

  return (
    <div className="create-dragon">
      <h1 className="create-dragon__title">Criar Dragão</h1>
      <CreateDragonForm onCreate={handleCreateDragon} />
    </div>
  );
};
