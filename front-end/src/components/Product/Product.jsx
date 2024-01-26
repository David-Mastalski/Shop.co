import styles from "./Product.module.css";

import { Link } from "react-router-dom";

export function Product({ product }) {
  const discount =
    ((product.previousPrice - product.price) / product.previousPrice) * 100;

  return (
    <Link
      to={`/${product.gender}/${product.category}/${product.subcategory}/${product.id}`}
      className={styles.product}
    >
      <div className={styles.imgContainer}>
        <img src={product.photos[0]} alt={product.productName} />
      </div>
      <p className={styles.productName}>{product.productName}</p>
      <div className={styles.prices}>
        <p className={styles.price}>${product.price}</p>
        {product.previousPrice && (
          <>
            <p className={styles.previousPrice}>${product.previousPrice}</p>
            <p className={styles.discount}>-{discount.toFixed()}%</p>
          </>
        )}
      </div>
    </Link>
  );
}
