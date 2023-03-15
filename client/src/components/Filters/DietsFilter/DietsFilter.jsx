import { useDispatch, useSelector } from "react-redux";
import { filterByDiet } from "../../../redux/Actions/actions";

const DietsFilter = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.dietTypes);

  const handleFilter = (event) => {
    dispatch(filterByDiet(event.target.value));
  };

  return (
    <div>
      <label>Type of diet:</label>
      <select onChange={handleFilter}>
        <option value="All">All...</option>
        {diets.map((d, index) => (
          <option key={index} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DietsFilter;
