import styles from "./MainMenu.module.css";

import { NavLink } from "react-router-dom";
import { GENDERS } from "../../constants/categories";

export function MainMenu() {
  return (
    <ul className={styles.menuList}>
      {GENDERS.map((item) => {
        return (
          <li
            key={item.name}
            className={`${styles.menuItem} ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
