import { Product } from "../product";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </>
  );
};

export { ProductList };
