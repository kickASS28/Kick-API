import classes from "./MainMenu.module.css";

import { FaUser, FaCheese, FaBrush, FaPaintRoller } from "react-icons/fa";

const MainMenu = ({ active, setActive }) => {
  return (
    <div className={classes.menu}>
      <h3>Menu</h3>
      <ul className={classes.menuItems}>
        <li
          className={active === "Users API" ? classes.active : ""}
          onClick={() => setActive("Users API")}
        >
          <FaUser size={23} />
          <span>Users API</span>
        </li>
        <li
          className={active === "Meals API" ? classes.active : ""}
          onClick={() => setActive("Meals API")}
        >
          <FaCheese size={23} />
          <span>Meals API</span>
        </li>
        <li
          className={active === "Colors API" ? classes.active : ""}
          onClick={() => setActive("Colors API")}
        >
          <FaBrush size={23} />
          <span>Colors API</span>
        </li>
        <li
          className={active === "Colors UI" ? classes.active : ""}
          onClick={() => setActive("Colors UI")}
        >
          <FaPaintRoller size={23} />
          <span>Colors UI</span>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
