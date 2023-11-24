import { useNavigate, useParams } from "react-router-dom";

import useForm from "../../hooks/useForm";
import * as gameService from "../../services/gameService";
import { useEffect, useState } from "react";

const Edit = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [game, setGame] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      setGame(result);
    });
  }, [gameId]);

  const editGameSubmitHandler = async (values) => {
    try {
      await gameService.edit(gameId, values);

      navigate("/games");
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };

  const { values, onChange, onSubmit } = useForm(editGameSubmitHandler, game);
  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={onChange}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={values.category}
            onChange={onChange}
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            value={values.maxLevel}
            onChange={onChange}
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={onChange}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            onChange={onChange}
            value={values.summary}
          />
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
};

export default Edit;
