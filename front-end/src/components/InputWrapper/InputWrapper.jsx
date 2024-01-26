import styles from "./InputWrapper.module.css";

export function InputWrapper({ icon, placeholder, onChange }) {
  return (
    <div className={styles.inputWrapper}>
      <img src={icon} alt="Search" className={styles.searchIcon} />
      <input
        onChange={onChange}
        className={styles.input}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
