import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import "./services/firebase";
import { CartProvider } from "./context";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={'/react_ecommerce/'}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/search/:string" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
