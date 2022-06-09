import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/styles.scss";
import "../src/styles/fuentes.scss";
import { Nosotros } from "./Page/Nosotros";
import { Contacto } from "./Page/Contacto";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { CheckOut } from "./components/checkout/CheckOut";
import { Home } from "./components/Home/Home";
import { NavBar2 } from "./components/NavBar2/NavBar2";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar2 />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:catId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          {/* FILTRADO DE PRODUCTOS */}
          <Route path="/categorias/drone " />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/home" element={<Home />} />
          {/* Navigate lo uso para llevar a la pagina de inicio al usuario en el caso de que quiera entrar a un sector invalido */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
