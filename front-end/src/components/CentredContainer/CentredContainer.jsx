import styles from "./CentredContainer.module.css";

export function CentredContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
