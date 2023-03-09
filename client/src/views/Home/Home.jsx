import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/Actions/actions";
import Pagination from "../../components/Pagination/pagination.jsx";

// 1. Cuando home se monta --> useEffect()
// 2. que haga el dispatch --> useDispatch()
// 3. hace que se ejecute la action creator --> getRecipes()
// 4. la info va al reducer
// 5. recibe la action, donde se crea un estado nuevo que es igual al E anterior sumandole las recetas.
const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = recipes.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <h1>PI FOOD</h1>
      <div>
        <CardsContainer recipesData={currentPosts} />
      </div>

      <div>
        <Pagination
          totalPost={recipes.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;
