import { Link } from "react-router-dom";
import Style from "./Landing.module.css";
const Landing = () => {
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
