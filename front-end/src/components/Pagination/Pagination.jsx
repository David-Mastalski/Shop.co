import styles from "./Pagination.module.css";

import { NavLink } from "react-router-dom";

export function Pagination({ numberOfPages }) {
  const pages = Array(numberOfPages).fill(null);

  return (
    <ul className={styles.pagination}>
      {pages.map((page, index) => {
        return (
          <li key={index}>
            <NavLink
              to={`?page=${index + 1}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {index + 1}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
