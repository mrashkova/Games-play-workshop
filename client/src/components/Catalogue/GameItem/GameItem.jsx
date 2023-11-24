import { Link } from "react-router-dom";

import pathToUrl from "../../../utils/pathUtils";
import Path from "../../../paths";

const GameItem = ({ _id, title, category, imageUrl }) => {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <Link
          to={pathToUrl(Path.GameDetails, { _id })}
          className="details-button"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default GameItem;
