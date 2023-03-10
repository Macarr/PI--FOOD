import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <Link to={`/detail/${props.id}`}>
        <p> {props.name} </p>
        <img src={props.image} alt="" />
      </Link>
      <ul>Type of diet:</ul>
      <ul>{props.diets}</ul>
    </div>
  );
};

export default Card;
