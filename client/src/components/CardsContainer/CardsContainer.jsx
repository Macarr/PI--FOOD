import Card from "../Card/Card.jsx";
import style from "./CardsContainer.module.css";
const CardsContainer = ({ recipesData }) => {
  //  //el array con las recetas viene de mi estado global, el store de redux, que a su vez esta filtrado por el paginado

  return (
    <div className={style.container}>
      {recipesData.map((recipe) => {
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
