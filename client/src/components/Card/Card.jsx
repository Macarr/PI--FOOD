import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <p> {props.name} </p>
      <img src={props.image} alt="" />
      <ul>Type of diet:</ul>
      <ul>{props.diets}</ul>
    </div>
  );
};

export default Card;
