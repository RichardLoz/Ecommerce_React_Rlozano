import { CartWidget } from "../CartWidget/CartWidget";
import { BsEnvelope } from "react-icons/bs";

export const NavBar2 = () => {
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
                <a className="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Catalogo</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
              <CartWidget />
            </ul>
          </div>
        </div>
      </section>

      <section id="hero">
        <h4>Sky-Importaciones</h4>
        <h2>Super ofertas todos los dias</h2>
        <h1>En todos los productos</h1>
        <p>Cupones de descuento & 70% OFF</p>
        <button>Catalogo</button>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="/assets/Features/f1.png" alt="" />
          <h6>Texto-1</h6>
        </div>
        <div className="fe-box">
          <img src="/assets/Features/f2.png" alt="" />
          <h6>Texto-2</h6>
        </div>
        <div className="fe-box">
          <img src="/assets/Features/f3.png" alt="" />
          <h6>Texto-3</h6>
        </div>
        <div className="fe-box">
          <img src="/assets/Features/f4.png" alt="" />
          <h6>Texto-4</h6>
        </div>
        <div className="fe-box">
          <img src="/assets/Features/f5.png" alt="" />
          <h6>Texto-5</h6>
        </div>
        <div className="fe-box">
          <img src="/assets/Features/f6.png" alt="" />
          <h6>Texto-6</h6>
        </div>
      </section>

      <div class="bg-seccion text-center" id="contacto">
        <form action="">
          <h2>Unete a nuestro Newsletter</h2>
          <p>
            Aprovecha los increibles descuentos en productos y bonificacion en
            gastos de envio que ofrecemos a nuestros suscriptores.
          </p>
          <div class="email-box">
            <i class="bx bxs-envelope">
              <BsEnvelope />
            </i>
            <input
              class="tbox"
              type="email"
              placeholder="Ingrese su correo electronico"
            />
            <button class="btn_2" type="button" name="button">
              Subscribirse
            </button>
          </div>
        </form>
      </div>

      <div className="section-m1" id="banner">
        <h4>Descuentos SKY</h4>
        <h2>
          Descuento del <span>70%</span> para los nuevos usuarios{" "}
        </h2>
        <button className="normal">Quiero mi descuento</button>
      </div>
    </>
  );
};
