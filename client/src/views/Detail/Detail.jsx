import { getDetailRecipe } from "../../redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const recipesDetail = useSelector((state) => state.recipesDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailRecipe(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{recipesDetail.name}</h1>
      <h5>{recipesDetail.id}</h5>
      <img src={recipesDetail.image} />
      <div>
        <h2> Diet type: </h2>

        {recipesDetail.diets
          ? recipesDetail?.diets.map((e) => {
              return <h2>{e}</h2>;
            })
          : recipesDetail.Diets?.map((e) => {
              return <h2>{e.name}</h2>;
            })}
      </div>
      <div>
        <h3>Summary: </h3>
        <p>{recipesDetail.summary?.replace(/<[^>]*>/g, "")}</p>
      </div>
      <div>
        <h3>Health score: {recipesDetail.healthScore}</h3>
      </div>
      <div>
        <h3>Setps: </h3>
        <ol>
          {Array.isArray(recipesDetail.steps) ? (
            recipesDetail.steps.map((e) => {
              return <li>{e.step}</li>;
            })
          ) : (
            <li>{recipesDetail.steps}</li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Detail;
