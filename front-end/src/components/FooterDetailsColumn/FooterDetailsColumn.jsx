import styles from "./FooterDetailsColumn.module.css";
import { Link } from "react-router-dom";

export function FooterDetailsColumn({ column }) {
  return (
    <div className={styles.footerColumn}>
      <p className={styles.columnTitle}>{column.title}</p>

      <ul>
        {column.details.map((item, index) => {
          return (
            <li key={index} className={styles.listItem}>
              <Link>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
