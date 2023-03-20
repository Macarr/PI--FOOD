import { Link } from "react-router-dom";

import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <Link className={style.Link} to={`/detail/${props.id}`}>
        <h1 className={style.name}>{props.name}</h1>
        <img className={style.img} src={props.image} alt="" />
      </Link>
      <ul>Type of diet:</ul>
      <ul>{props.diets}</ul>
      <div className={style.hs}>
        <p> HS: {props.healthScore}</p>
      </div>
    </div>
  );
};

export default Card;
