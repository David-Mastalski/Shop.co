import styles from "./FooterBottomBar.module.css";

import VISA from "../../assets/visa.svg";
import MASTER_CARD from "../../assets/masterCard.svg";
import PAYPAL from "../../assets/payPal.svg";
import APPLE_PAY from "../../assets/applePay.svg";
import GOOGLE_PAY from "../../assets/googlePay.svg";

export function FooterBottomBar() {
  const date = new Date();

  return (
    <div className={styles.bottomBar}>
      <p className={styles.copyRight}>
        Shop.co © 2000-{date.getFullYear()}, All Rights Reserved
      </p>
      <ul className={styles.cardList}>
        <li>
          <img src={VISA} alt="Visa" />
        </li>
        <li>
          <img src={MASTER_CARD} alt="MasterCard" />
        </li>
        <li>
          <img src={PAYPAL} alt="PayPal" />
        </li>
        <li>
          <img src={APPLE_PAY} alt="ApplePay" />
        </li>
        <li>
          <img src={GOOGLE_PAY} alt="GooglePay" />
        </li>
      </ul>
    </div>
  );
}
