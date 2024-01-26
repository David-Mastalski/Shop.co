import styles from "./IconMenu.module.css";

import { Link } from "react-router-dom";
import CART_ICON from "../../assets/cart.svg";
import ACCOUNT_ICON from "../../assets/account.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function IconMenu() {
  const [cartItems] = useContext(CartContext);

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/cart">
          <img src={CART_ICON} alt="Cart" />
          {cartItems.length !== 0 && (
            <div className={styles.numberOfProducts}>{cartItems.length}</div>
          )}
        </Link>
      </li>
      <li>
        <Link to="/account">
          <img src={ACCOUNT_ICON} alt="Your Account" />
        </Link>
      </li>
    </ul>
  );
}
