import { useDispatch } from "react-redux";
import { sortByName, sortByHealthScore } from "../../../redux/Actions/actions";
import style from "./Sort.module.css";

const Sort = () => {
  const dispatch = useDispatch();

  const handleSort = (event) => {
    dispatch(sortByName(event.target.value));
  };

  const handleSortHealth = (event) => {
    dispatch(sortByHealthScore(event.target.value));
  };

  return (
    <div className={style.conteiner}>
      <label>Order by name</label>
      <select className={style.select} onChange={(event) => handleSort(event)}>
        <option value="A to Z">A to Z</option>
        <option value="Z to A">Z to A</option>
      </select>

      <label>
        Order by HealthScore
        <select
          className={style.select}
          defaultValue="Select order..."
          onChange={handleSortHealth}
        >
          <option disabled>Select order...</option>
          <option value="1 to 100">less healthy </option>
          <option value="100 to 1">more healthy </option>
        </select>
      </label>
    </div>
  );
};

export default Sort;
