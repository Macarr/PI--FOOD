import { useDispatch, useSelector } from "react-redux";
import { filterByDiet } from "../../../redux/Actions/actions";
import style from "./DietsFilter.module.css";
const DietsFilter = () => {
  const dispatch = useDispatch();
  const { dietTypes } = useSelector((state) => state);

  const handleFilter = (event) => {
    dispatch(filterByDiet(event.target.value));
  };

  return (
    <div className={style.conteiner}>
      <label>Type of diet:</label>
      <select className={style.select} onChange={handleFilter}>
        <option value="All">All...</option>
        {dietTypes.map((d, index) => (
          <option key={index} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DietsFilter;
