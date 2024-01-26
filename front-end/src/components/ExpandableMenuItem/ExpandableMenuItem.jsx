import styles from "./ExpandableMenuItem.module.css";

import { useState } from "react";
import ARROW_RIGHT from "../../assets/arrow-right.svg";
import { NavLink } from "react-router-dom";

export function ExpandableMenuItem({ children, category, genderParam }) {
  const [isExpandable, setIsExpandable] = useState(false);

  return (
    <li className={styles.menuItem} key={category.path}>
      <div>
        <NavLink to={`/${genderParam}/${category.path}`}>{children}</NavLink>
        <span onClick={() => setIsExpandable((prevState) => !prevState)}>
          <img
            src={ARROW_RIGHT}
            alt="Expandable"
            className={isExpandable ? styles.expanded : ""}
          />
        </span>
      </div>

      {isExpandable && (
        <ul className={styles.subCategoriesMenu}>
          {category.subCategories.map((subcategory) => {
            return (
              <li key={subcategory.path}>
                <NavLink
                  to={`/${genderParam}/${category.path}/${subcategory.path}`}
                >
                  {subcategory.categoryName}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
