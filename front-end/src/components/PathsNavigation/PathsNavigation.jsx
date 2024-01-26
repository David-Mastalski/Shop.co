import styles from "./PathsNavigation.module.css";

import ARROW from "../../assets/arrow.svg";
import { CentredContainer } from "../CentredContainer/CentredContainer";
import { NavLink } from "react-router-dom";

export function PathsNavigation({ paths }) {
  return (
    <CentredContainer>
      <ul className={styles.pathNav}>
        {paths.map((breadcrumb) => {
          return (
            <li key={breadcrumb.path}>
              <NavLink to={breadcrumb.path}>
                {breadcrumb.categoryName}
                <img src={ARROW} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </CentredContainer>
  );
}
