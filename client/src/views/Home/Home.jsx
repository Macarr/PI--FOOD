import CardsContainer from "../../components/CardsContainer/CardsContainer.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanRecipes } from "../../redux/Actions/actions";
import Pagination from "../../components/Pagination/pagination.jsx";
import style from "./Home.module.css";
import Sort from "../../components/Filters/Sort/Sort.jsx";
import DietsFilter from "../../components/Filters/DietsFilter/DietsFilter.jsx";
import Created from "../../components/Filters/Created/Created.jsx";
// 1. Cuando home se monta --> useEffect()
// 2. que haga el dispatch --> useDispatch()
// 3. hace que se ejecute la action creator --> getRecipes()
// 4. la info va al reducer
// 5. recibe la action, donde se crea un estado nuevo que es igual al E anterior sumandole las recetas.
const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipesModified);

  useEffect(() => {
    dispatch(cleanRecipes());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = recipes.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={style.container}>
      <div>
        <Sort />
        <DietsFilter />
        <Created />
      </div>

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
