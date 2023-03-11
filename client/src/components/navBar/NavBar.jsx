import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <NavLink className={style.navLink} to="/home">
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
