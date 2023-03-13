import { useDispatch, useSelector } from "react-redux";
import { filterByDiet, getDiets } from "../../../redux/Actions/actions";
import { useEffect } from "react";

const DietsFilter = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.dietTypes);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

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
