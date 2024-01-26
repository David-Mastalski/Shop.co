import styles from "./OrderSummary.module.css";

import { useState } from "react";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import LABEL_ICON from "../../assets/label.svg";

export function OrderSummary({ products }) {
  const discountProcent = 25;
  const [inputValue, setInputValue] = useState("");
  const [discount, setDiscount] = useState(false);
  const [isErrorShown, setIsErrorShown] = useState(false);

  const promoCod = "kodpromocyjny";

  const deliveryCost = products.length === 0 ? 0 : 20;
  let sum = 0;
  products.forEach((product) => {
    sum += product.price * product.count;
  });

  const totalSum = discount
    ? sum - (discountProcent / 100) * sum + deliveryCost
    : sum + deliveryCost;

  function handleSubmit(e) {
    e.preventDefault();

    if (inputValue === promoCod) {
      setDiscount(true);
      setIsErrorShown(false);
    } else {
      setIsErrorShown(true);
    }
  }

  return (
    <div className={styles.summary}>
      <h4>Order Summary</h4>

      <div className={styles.summaryDetails}>
        <div className={styles.summaryRow}>
          <p className={styles.rowTitle}>Subtotal</p>
          <p className={styles.rowValue}> ${sum}</p>
        </div>
        {discount && (
          <div className={styles.summaryRow}>
            <p className={styles.rowTitle}>Discount (-{discountProcent}%)</p>
            <p className={`${styles.rowValue} ${styles["rowValue--discount"]}`}>
              -${(discountProcent / 100) * sum}
            </p>
          </div>
        )}
        <div className={styles.summaryRow}>
          <p className={styles.rowTitle}>Delivery</p>
          <p className={styles.rowValue}>${deliveryCost}</p>
        </div>
        <hr></hr>
        <div className={styles.summaryRow}>
          <p className={styles.rowTitle}>Total</p>
          <p className={`${styles.rowValue} ${styles["rowValue--totalPrice"]}`}>
            ${totalSum}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.promoCodeForm}>
        <div>
          <InputWrapper
            icon={LABEL_ICON}
            placeholder="Add promo code"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          {isErrorShown && (
            <p className={styles.error}>
              The promotional code provided is incorrect!!!
            </p>
          )}
        </div>
        <button
          className={styles.applyBtn}
          type="submit"
          disabled={discount === true}
        >
          Apply
        </button>
      </form>
    </div>
  );
}
