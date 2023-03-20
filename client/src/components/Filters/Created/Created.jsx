import { useDispatch } from "react-redux";
import { filterCreate } from "../../../redux/Actions/actions";
import style from "./Created.module.css";
const Created = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterCreate(event.target.value));
  };

  return (
    <div className={style.conteiner}>
      <label>My recipes:</label>
      <select className={style.select} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="created">Created</option>
        <option value="api recipes">Api recipes</option>
      </select>
    </div>
  );
};

export default Created;
