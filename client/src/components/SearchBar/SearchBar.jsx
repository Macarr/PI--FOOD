import { getRecipesByName } from "../../redux/Actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getRecipesByName(search));
    setSearch("");
  };

  return (
    <div className={style.searchBar}>
      <input
        className={style.input}
        id="search"
        placeholder="Search recipe by name..."
        type="search"
        autoComplete="off"
        onChange={handleChange}
        value={search}
      ></input>

      <button className={style.button} type="submit" onClick={handleSubmit}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
