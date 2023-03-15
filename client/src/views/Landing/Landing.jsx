import { Link } from "react-router-dom";
import { getRecipes, getDiets } from "../../redux/Actions/actions";
import Style from "./Landing.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className={Style.text}>
      <h1> Welcome to my individual proyect of food</h1>
      <h4> Macarena Rodríguez Rucci </h4>
      <h5> cohorte 34 b </h5>
      <Link to="/home"> Click to enter </Link>
    </div>
  );
};

export default Landing;
