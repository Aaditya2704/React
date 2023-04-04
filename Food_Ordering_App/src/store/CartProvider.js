import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartProvider = (item) => {};
  const removeItemFromCartHandler = (item) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartProvider,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.chidren}
    </CartContext.Provider>
  );
};
export default CartProvider;
