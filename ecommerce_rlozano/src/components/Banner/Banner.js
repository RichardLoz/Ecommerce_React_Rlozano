import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <>
      <div className="section-m1" id="banner">
        <h4>Descuentos SKY</h4>
        <h2>
          Descuento del <span>70%</span> para los nuevos usuarios{" "}
        </h2>
        <Link to={"/"}>
          <button className="normal">Quiero mi descuento</button>
        </Link>
      </div>
      <div class="testimonios__header bg-light">
        <span>Nuevos productos</span>
        <h2>PROXIMAMENTE</h2>
      </div>
      <div id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Para Ellas</h4>
          <h2>Coleccion</h2>
          <span>Verano '23</span>
          <button className="white">Proximamente</button>
        </div>

        <div className="banner-box banner-box2">
          <h4>Para todos</h4>
          <h2>Abrigos</h2>
          <span>Unisex</span>
          <button className="white">Proximamente</button>
        </div>
      </div>
    </>
  );
};
