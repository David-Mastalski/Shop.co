import styles from "./Bestseller.module.css";

import { CentredContainer } from "../CentredContainer/CentredContainer";
import { Product } from "../Product/Product";
import { Link } from "react-router-dom";

export function Bestseller({ products, category, path }) {
  return (
    <div className={styles.bestseller}>
      <CentredContainer>
        <h2 className={styles.bestsellerTitle}>{category}</h2>
        <div className={styles.productsWrapper}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        <Link to={path} className={styles.showMoreBtn}>
          Show More
        </Link>
      </CentredContainer>
    </div>
  );
}
