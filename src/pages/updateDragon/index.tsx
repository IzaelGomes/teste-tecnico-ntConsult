import { useParams } from "react-router-dom";
import {
  DragonForm,
  DragonFormData,
} from "../../components/DragonForm/dragonForm";
import { useUpdateDragon } from "../../services/hooks/useUpdateDragon";
import "./style.css";
import { useGetDragon } from "../../services/hooks/useGetDragon";

export const UpdateDragon = () => {
  const { id } = useParams();
  const { data } = useGetDragon(id);
  const { mutateAsync: updateDragonMutate } = useUpdateDragon();

  const handleUpdateDragon = async (updateDragonFormData: DragonFormData) => {
    await updateDragonMutate({
      id: String(id),
      name: updateDragonFormData.name,
      type: updateDragonFormData.type,
      histories: [],
    });

    alert("Dragão atualizado.");

    return;
  };

  return (
    <div className="edit-dragon">
      <h1 className="edit-dragon__title">Editar Dragão</h1>
      <DragonForm defaultDragonData={data} onSubmit={handleUpdateDragon} />
    </div>
  );
};
