import styles from "./Details.module.css";

import { useState } from "react";

import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Counter } from "../Counter/Counter";

export function Details({ product }) {
  const [counter, setCounter] = useState(1);
  const [, setCartItems] = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("small");

  const discount =
    ((product.previousPrice - product.price) / product.previousPrice) * 100;

  function handleSelectOption(e) {
    setSelectedSize(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCartItems((prevCartItems) => {
      const newState = [
        ...prevCartItems,
        {
          id: product.id,
          productName: product.productName,
          price: product.price,
          size: selectedSize,
          count: counter,
          photo: product.photos[0],
        },
      ];
      localStorage["cartItems"] = JSON.stringify(newState);
      return newState;
    });
    setCounter(1);
  }

  return (
    <div className={styles.detailsWrapper}>
      <h3>{product.productName}</h3>
      <div className={styles.prices}>
        <p className={styles.price}>${product.price}</p>
        {product.previousPrice && (
          <>
            <p className={styles.previousPrice}>${product.previousPrice}</p>
            <p className={styles.discount}>-{discount.toFixed()}%</p>
          </>
        )}
      </div>
      <p className={styles.description}>{product.description}</p>
      <hr></hr>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.sizesWrapper}>
          <p className={styles.optionTitle}>Choose size</p>
          <div className={styles.sizes}>
            <input
              checked={selectedSize === "small"}
              type="radio"
              name="size"
              id="small"
              value="small"
              onChange={handleSelectOption}
            />
            <label htmlFor="small">Small</label>

            <input
              checked={selectedSize === "medium"}
              type="radio"
              name="size"
              id="medium"
              value="medium"
              onChange={handleSelectOption}
            />
            <label htmlFor="medium">Medium</label>

            <input
              checked={selectedSize === "large"}
              type="radio"
              name="size"
              id="large"
              value="large"
              onChange={handleSelectOption}
            />
            <label htmlFor="large">Large</label>

            <input
              checked={selectedSize === "x-large"}
              type="radio"
              name="size"
              id="x-large"
              value="x-large"
              onChange={handleSelectOption}
            />
            <label htmlFor="x-large">X-Large</label>
          </div>
        </div>
        <hr></hr>
        <div className={styles.counterWrapper}>
          <Counter counter={counter} setCounter={setCounter} />
          <button className={styles.addToCartBtn}>Add to Cart</button>
        </div>
      </form>
    </div>
  );
}
