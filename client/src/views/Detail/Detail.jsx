import { getDetailRecipe, cleanDetail } from "../../redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const recipesDetail = useSelector((state) => state.recipesDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailRecipe(id));

    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  return (
    <div className={style.mainContainer}>
      <h1 className={style.name}>{recipesDetail?.name}</h1>
      <h5 className={style.id}>{recipesDetail?.id}</h5>
      <img className={style.img} src={recipesDetail?.image} alt="" />
      <div className={style.container}>
        <h2> Diet type: </h2>

        {recipesDetail?.diets
          ? recipesDetail?.diets.map((e) => {
              return (
                <p className={style.diets} hey={e}>
                  {e}
                </p>
              );
            })
          : recipesDetail.Diets?.map((e) => {
              return (
                <p className={style.diets} hey={e.name}>
                  {e.name}
                </p>
              );
            })}
      </div>
      <div className={style.container}>
        <h3>Summary: </h3>
        <p>{recipesDetail.summary?.replace(/<[^>]*>/g, "")}</p>
      </div>
      <div className={style.container}>
        <h3>Health score: {recipesDetail?.healthScore}</h3>
      </div>
      <div className={style.container}>
        <h3>Setps: </h3>
        <ol>
          {Array.isArray(recipesDetail?.steps) ? (
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
