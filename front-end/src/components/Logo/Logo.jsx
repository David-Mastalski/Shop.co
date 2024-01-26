import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      SHOP.CO
    </Link>
  );
}
