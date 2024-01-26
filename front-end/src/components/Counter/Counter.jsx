import styles from "./Counter.module.css";

import MINUS_ICON from "../../assets/minus.svg";
import PLUS_ICON from "../../assets/plus.svg";

export function Counter({ counter, setCounter }) {
  return (
    <div className={styles.counter}>
      <button
        type="button"
        onClick={() => {
          if (counter > 1) {
            setCounter((prevCounter) => prevCounter - 1);
          }
        }}
      >
        <img src={MINUS_ICON} alt="-" />
      </button>
      <p>{counter}</p>
      <button
        type="button"
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        <img src={PLUS_ICON} alt="+" />
      </button>
    </div>
  );
}
