import { useMemo } from "react";
import { useGetDragons } from "../../services/hooks/useGetDragons";
import "./style.css";
import { orderDragonsByName } from "./utils";
import { DragonCard } from "./components/dragonCard/dragonCard";
import { useDeleteDragon } from "../../services/hooks/useDeleteDragon";

export const Dragons = () => {
  const { data } = useGetDragons();
  const orderedDragons = useMemo(() => orderDragonsByName(data), [data]);
  const { mutateAsync: deleteDragonMutate } = useDeleteDragon();

  return (
    <div className="dragon-container">
      {orderedDragons.map((dragon) => (
        <DragonCard
          key={dragon.id}
          data={dragon}
          onDelete={deleteDragonMutate}
        />
      ))}
    </div>
  );
};
