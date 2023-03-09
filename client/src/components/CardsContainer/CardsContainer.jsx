import Card from "../Card/Card.jsx";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
const CardsContainer = () => {
  //  //el array con las recetas viene de mi estado global, el store de redux
  const cardRecipe = useSelector((state) => state.recipes);

  return (
    <div className={style.container}>
      {cardRecipe.map((recipe) => {
        return (
          <Card
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            summary={recipe.summary}
            healthScore={recipe.healthScore}
            steps={recipe.steps}
            diets={recipe.diets.join(" - ")}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
