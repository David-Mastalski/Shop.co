import styles from "./CartProductsList.module.css";

import { CartProduct } from "../CartProduct/CartProduct";
import { CentredContainer } from "../CentredContainer/CentredContainer";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";

export function CartProductsList({ products }) {
  return (
    <CentredContainer>
      <h3>Your cart</h3>

      <div className={styles.flexContainer}>
        {products.length === 0 ? (
          <p className={styles.cartIsEmptyMessage}>There is nothing here :( </p>
        ) : (
          <ul className={styles.cartProductList}>
            {products.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </ul>
        )}

        <OrderSummary products={products} />
      </div>
    </CentredContainer>
  );
}
