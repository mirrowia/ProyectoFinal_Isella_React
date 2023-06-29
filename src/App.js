import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { Cart } from "./pages/Cart";
import "./services/firebase";
import { useContext } from "react";

function App() {
  const cart = useContext([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/search/:string" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
