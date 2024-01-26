import styles from "./CartProduct.module.css";

import DELETE_ICON from "../../assets/delete.svg";
import { Counter } from "../Counter/Counter";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";

export function CartProduct({ product }) {
  const [counter, setCounter] = useState(product.count);
  const [, setCartItems] = useContext(CartContext);

  useEffect(() => {
    setCartItems((prevData) =>
      prevData.map((item) => {
        return item.id === product.id ? { ...item, count: counter } : item;
      })
    );
  }, [counter]);

  function handleDeleteProduct() {
    setCartItems((prevData) => {
      const newState = prevData.filter((item) => item.id !== product.id);
      localStorage["cartItems"] = JSON.stringify(newState);
      return newState;
    });
  }

  return (
    <div className={styles.cartProduct}>
      <div className={styles.imgContainer}>
        <img src={product.photo} />
      </div>
      <div className={styles.productInfoWrapper}>
        <div className={`${styles.column} ${styles["column__left"]}`}>
          <div>
            <p className={styles.productName}>{product.productName}</p>
            <p className={styles.productSize}>
              Size: <span>{product.size}</span>
            </p>
          </div>
          <p className={styles.productPrice}>${product.price}</p>
        </div>
        <div className={`${styles.column} ${styles["column__right"]}`}>
          <button onClick={handleDeleteProduct} className={styles.deleteBtn}>
            <img src={DELETE_ICON} alt="Delete" />
          </button>
          <Counter counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </div>
  );
}
