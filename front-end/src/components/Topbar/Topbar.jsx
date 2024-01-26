import styles from "./Topbar.module.css";

export function Topbar({ children }) {
  return <div className={styles.topBar}>{children}</div>;
}
