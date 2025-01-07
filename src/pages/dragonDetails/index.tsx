import { useParams } from "react-router-dom";
import { useGetDragon } from "../../services/hooks/useGetDragon";
import { DragonCardDetails } from "./components/dragonCardDetails";

export const DragonDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetDragon(id);

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Erro ao carregar os detalhes do dragão.</p>;

  if (!data) return <p>Dragão não encontrado.</p>;

  return <DragonCardDetails data={data} />;
};
