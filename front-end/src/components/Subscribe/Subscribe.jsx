import styles from "./Subscribe.module.css";

export function Subscribe({ children }) {
  return (
    <div className={styles.relativeWrapper}>
      <div className={styles.content}>
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>

        <div className={styles.formContainer}>
          {children}
          <button className={styles.subscribeBtn}>
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
