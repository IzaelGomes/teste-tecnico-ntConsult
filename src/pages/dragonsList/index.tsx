import { useMemo } from "react";
import { useGetDragons } from "../../services/hooks/useGetDragons";
import "./style.css";
import { orderDragonsByName } from "./utils";
import { DragonCard } from "./components/dragonCard/dragonCard";

export const Dragons = () => {
  const { data } = useGetDragons();
  const orderedDragons = useMemo(() => orderDragonsByName(data), [data]);

  return (
    <div className="dragon-container">
      {orderedDragons.map((dragon) => (
        <DragonCard key={dragon.id} {...dragon} />
      ))}
    </div>
  );
};
