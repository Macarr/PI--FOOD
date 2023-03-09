import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions.js";

// 1. Cuando home se monta --> useEffect()
// 2. que haga el dispatch --> useDispatch()
// 3. hace que se ejecute la action creator --> getRecipes()
// 4. la info va al reducer
// 5. recibe la action, donde se crea un estado nuevo que es igual al E anterior sumandole las recetas.
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      <h1>PI FOOD</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
