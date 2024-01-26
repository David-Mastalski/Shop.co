import styles from "./Products.module.css";

import { Product } from "../Product/Product";
import { useParams } from "react-router-dom";

export function Products({ products }) {
  const params = useParams();

  let param = null;

  if (params.subcategory) {
    param = params.subcategory;
  } else if (params.caregory) {
    param = params.caregory;
  } else if (params.gender) {
    param = params.gender;
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>{param}</p>
      <div className={styles.productsWrapper}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
