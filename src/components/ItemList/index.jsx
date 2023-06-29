import { ItemDetail } from "../ItemDetail";

const ItemList = ({ mangas }) => {
  return (
    <>
      {mangas.map((product) => {
        return <ItemDetail key={product.id} {...product} />;
      })}
    </>
  );
};

export { ItemList };
