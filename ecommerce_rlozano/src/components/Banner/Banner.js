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
          <h4>Texto-1</h4>
          <h2>Texto2</h2>
          <span>Texto3</span>
          <button className="white">Proximamente</button>
        </div>

        <div className="banner-box banner-box2">
          <h4>Texto-1</h4>
          <h2>Texto2</h2>
          <span>Texto3</span>
          <button className="white">Proximamente</button>
        </div>
      </div>
    </>
  );
};
