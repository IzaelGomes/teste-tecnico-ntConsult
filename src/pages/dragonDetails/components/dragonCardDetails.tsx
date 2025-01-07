import "./style.css";
import { TDragon } from "../../../services/dragon-types";
import { formatDate } from "../../../utils";

interface DragonCardDetails {
  data: TDragon;
}

export const DragonCardDetails = ({ data }: DragonCardDetails) => {
  return (
    <div className="dragon-details">
      <h1 className="dragon-details__title">{data.name}</h1>
      <p className="dragon-details__info">
        <span>Tipo:</span> {data.type}
      </p>
      <p className="dragon-details__info">
        <span>Criado em:</span> {formatDate(data.createdAt)}
      </p>
      <h2 className="dragon-details__subtitle">Histórias:</h2>
      {data.histories?.length > 0 ? (
        <ul className="dragon-details__list">
          {data.histories.map((history, index) => (
            <li key={index} className="dragon-details__item">
              {history}
            </li>
          ))}
        </ul>
      ) : (
        <p className="dragon-details__no-history">Sem histórias registradas.</p>
      )}
    </div>
  );
};
