import { useContext } from "react";
import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { PathsNavigation } from "../../components/PathsNavigation/PathsNavigation";
import { CartContext } from "../../context/cartContext";

export function Cart() {
  const [cartItems] = useContext(CartContext);
  const breadcrumbs = [
    {
      path: `/`,
      categoryName: "Home",
    },
    {
      path: `/cart`,
      categoryName: "Cart",
    },
  ];

  return (
    <>
      <PathsNavigation paths={breadcrumbs} />
      <CartProductsList products={cartItems} />
    </>
  );
}
