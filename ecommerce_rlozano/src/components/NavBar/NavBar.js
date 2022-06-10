import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <>
      <section id="header">
        <a href="#">
          <img src="" alt="logo" />
        </a>

        <div>
          <div>
            <ul id="navbar">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/nosotros"}>Nosotros</Link>
              </li>
              <li>
                <Link to={"/productos"}>Productos</Link>
              </li>
              <li>
                <Link to={"/contacto"}>Contacto</Link>
              </li>
              <CartWidget />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
