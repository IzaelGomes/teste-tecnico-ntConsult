import { Link } from "react-router-dom";
import "./dragonCardStyles.css";
import { useId } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { TDragon } from "../../../../services/dragon-types";

type DragonData = Pick<TDragon, "id" | "name">;
interface DragonCardProps {
  data: DragonData;
  onDelete?: (id: string) => void;
}

export const DragonCard = ({ data, onDelete }: DragonCardProps) => {
  const titleId = useId();

  return (
    <div className="dragon-card">
      <h2 id={titleId} className="dragon-card__title">
        🐉 Dragão - {data.name}
      </h2>
      <Link
        aria-describedby={titleId}
        className="dragon-card__link"
        to={`/dragons/details/${data.id}`}
      >
        ver mais..
      </Link>
      <div className="dragon-card__actions">
        <button aria-label="excluir" onClick={() => onDelete?.(data.id)}>
          <Trash2 className="dragon-card__delete" />
        </button>

        <Link to={`/dragons/update/${data.id}`}>
          <Pencil aria-label="editar" className="dragon-card__update" />
        </Link>
      </div>
    </div>
  );
};
