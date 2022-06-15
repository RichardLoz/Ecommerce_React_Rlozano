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
import { Hero } from "./components/Hero/Hero";
import { Feature } from "./components/Feature/Feature";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Banner } from "./components/Banner/Banner";
import { ItemList } from "./components/ItemList/ItemList";
import { Footer } from "./components/Footer/Footer";
import { Comentario } from "./components/Comentarios/Comentario";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Hero />
        <Feature />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:catId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          {/* FILTRADO DE PRODUCTOS */}
          <Route path="/categorias/drone " />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/itemList" element={<ItemList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/newsletter" element={<Newsletter />} />
          {/* Navigate lo uso para llevar a la pagina de inicio al usuario en el caso de que quiera entrar a un sector invalido */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Newsletter />
        <Banner />
        <Comentario />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
