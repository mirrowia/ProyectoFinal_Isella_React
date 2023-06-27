import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./pages/item-list-container";
import ItemDetailContainer from "./pages/item-detail-container";
import { Cart } from "./pages/cart";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTpyDBb8WTOUGtsI8_JSGXIOcp7dhpdaY",
  authDomain: "mangastore-f3f7d.firebaseapp.com",
  projectId: "mangastore-f3f7d",
  storageBucket: "mangastore-f3f7d.appspot.com",
  messagingSenderId: "488259727461",
  appId: "1:488259727461:web:79af69799a1382c8ca568c",
  measurementId: "G-8CZMXD00MS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/search/:string" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
