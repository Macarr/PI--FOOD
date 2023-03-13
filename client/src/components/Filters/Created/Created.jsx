import { useDispatch } from "react-redux";
import { filterCreate } from "../../../redux/Actions/actions";

const Created = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterCreate(event.target.value));
  };

  return (
    <div>
      <label>My recipes: </label>
      <select onChange={handleFilter}>
        <option label>...</option>
        <option value="created">Created</option>
        <option value="api recipes">Api recipes</option>
      </select>
    </div>
  );
};

export default Created;
