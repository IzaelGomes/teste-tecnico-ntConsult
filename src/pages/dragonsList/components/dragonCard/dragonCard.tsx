import { Link } from "react-router-dom";
import "./dragonCardStyles.css";
import { useId } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { TDragon } from "../../../../services/dragon-types";
import cardImage from "../../../../assets/card-image.jpg";

type DragonData = Pick<TDragon, "id" | "name">;
interface DragonCardProps {
  data: DragonData;
  onDelete?: (id: string) => void;
}

export const DragonCard = ({ data, onDelete }: DragonCardProps) => {
  const titleId = useId();

  return (
    <div
      className="dragon-card"
      style={{ backgroundImage: `url(${cardImage})` }}
    >
      <div className="dragon-card__options">
        <div className="dragon-card__actions">
          <button
            className="dragon-card__delete"
            aria-label="excluir"
            onClick={() => onDelete?.(data.id)}
          >
            <Trash2 size={24} className="dragon-card__delete-icon" />
          </button>
          <Link to={`/dragons/update/${data.id}`}>
            <Pencil
              size={24}
              aria-label="editar"
              className="dragon-card__update"
            />
          </Link>
        </div>
      </div>
      <div className="dragon-card_infor">
        <h2 id={titleId} className="dragon-card__title">
          Dragão - {data.name}
        </h2>
        <Link
          aria-describedby={titleId}
          className="dragon-card__link"
          to={`/dragons/details/${data.id}`}
        >
          ver mais
        </Link>
      </div>
    </div>
  );
};
