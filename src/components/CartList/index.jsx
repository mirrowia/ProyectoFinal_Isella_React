import { CartItem } from "../CartItem";

const ItemList = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </>
  );
};

export { ItemList };
