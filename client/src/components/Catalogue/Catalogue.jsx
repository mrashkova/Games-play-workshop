import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import GameItem from "./GameItem/GameItem";

const Catalogue = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService
      .getAll()
      .then((result) => setGames(result))
      .catch((err) => console.error(err));
  }, []);

  console.log(games);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {/* <!-- Display div: with information about every game (if any) --> */}

      {games.map((game) => (
        <GameItem key={game._id} {...game} />
        // <GameItem
        //   title={game.title}
        //   imageUrl={game.imageUrl}
        //   category={game.category}
        // />
      ))}

      {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>
  );
};

export default Catalogue;
