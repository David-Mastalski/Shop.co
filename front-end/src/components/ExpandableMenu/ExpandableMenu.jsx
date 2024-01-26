import styles from "./ExpandableMenu.module.css";

import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import { DRESS_STYLE } from "../../constants/categories";
import FILTER_ICON from "../../assets/filters.svg";
import ARROW_RIGHT from "../../assets/arrow-right.svg";
import { ExpandableMenuItem } from "../ExpandableMenuItem/ExpandableMenuItem";

export function ExpandableMenu() {
  const params = useParams();

  return (
    <div className={styles.filters}>
      <div className={styles.header}>
        <p className={styles.title}>Filters</p>
        <img src={FILTER_ICON} alt="Filter Icon" />
      </div>
      <hr></hr>
      <ul className={styles.expandableMenu}>
        {CATEGORIES.map((category) => (
          <ExpandableMenuItem
            key={category.path}
            category={category}
            genderParam={params.gender}
          >
            {category.categoryName}
          </ExpandableMenuItem>
        ))}
      </ul>
      <hr></hr>
      <div>
        <p className={styles.sectionTitle}>Dress Style</p>

        <ul className={styles.expandableMenu}>
          {DRESS_STYLE.map((category) => {
            return (
              <li className={styles.menuItem} key={category.path}>
                <div>
                  <NavLink to={`/${params.gender}/${category.path}`}>
                    {category.categoryName}
                  </NavLink>
                  <span>
                    <img src={ARROW_RIGHT} alt="Show" />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
