import { useDispatch } from "react-redux";
import { sortByName, sortByHealthScore } from "../../../redux/Actions/actions";

const Sort = () => {
  const dispatch = useDispatch;

  const handleSort = (event) => {
    dispatch(sortByName(event.target.value));
  };

  const handleSortHealth = (event) => {
    dispatch(sortByHealthScore(event.target.value));
  };

  return (
    <div>
      <label>Order by name </label>
      <select onChange={(event) => handleSort(event)}>
        <option>Select order...</option>
        <option value="A to Z">A to Z</option>
        <option value="Z to A">Z to A</option>
      </select>

      <label>Order by HealthScore </label>
      <select onChange={handleSortHealth}>
        <option>Select order...</option>
        <option value="1 to 100">less healthy </option>
        <option value="100 to 1">more healthy </option>
      </select>
    </div>
  );
};

export default Sort;
