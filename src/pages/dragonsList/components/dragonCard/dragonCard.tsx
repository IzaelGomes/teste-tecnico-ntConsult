import { Link } from "react-router-dom";
import "./dragonCardStyles.css";
import { useId } from "react";

interface DragonCardProps {
  id: string;
  name: string;
  type: string;
  histories: string[];
}

export const DragonCard = ({ id, name }: DragonCardProps) => {
  const titleId = useId();
  return (
    <div className="dragon-card">
      <h2 id={titleId} className="dragon-card__title">
        🐉 Dragão - {name}
      </h2>

      <Link
        aria-describedby={titleId}
        className="dragon-card__link"
        to={`/dragons/details/${id}`}
      >
        ver mais..
      </Link>
    </div>
  );
};
