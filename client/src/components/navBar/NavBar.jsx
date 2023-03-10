import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <NavLink className={style.navLink} to="/home">
        HOME
      </NavLink>
      <NavLink className={style.navLink} to="/create">
        CREATE
      </NavLink>
    </div>
  );
};

export default NavBar;
