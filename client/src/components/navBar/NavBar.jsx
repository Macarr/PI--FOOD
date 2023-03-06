import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <NavLink to="/home"> HOME </NavLink>
      <NavLink to="/create"> CREATE </NavLink>
    </div>
  );
};

export default NavBar;
