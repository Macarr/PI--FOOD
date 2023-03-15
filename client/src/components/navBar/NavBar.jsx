import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { cleanRecipes } from "../../redux/Actions/actions";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const limpiarFiltro = () => {
    dispatch(cleanRecipes());
  };
  return (
    <div className={style.mainContainer}>
      <NavLink className={style.navLink} onClick={limpiarFiltro} to="/home">
        HOME
      </NavLink>
      <SearchBar />
      <NavLink className={style.navLink} to="/create">
        CREATE
      </NavLink>
    </div>
  );
};

export default NavBar;
