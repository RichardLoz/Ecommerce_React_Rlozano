import { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({
  id,
  nombre,
  precio,
  img,
  desc,
  stock,
  categoria,
}) => {
  const [cantidad, setCantidad] = useState(0);

  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const handleAgregar = () => {
    /* TODO: Tecnica Early Return */
    if (cantidad === 0) return;

    if (!isInCart(id)) {
      const addItem = {
        id,
        nombre,
        precio,
        stock,
        cantidad,
      };
      agregarAlCarrito(addItem);
    }
  };

  /* return (
    <Container className="p-2 text-center">
      <br />
      <Row className="gx-5  shadow p-3 mb-5 bg-white rounded">
        <Col>
          <img src={img} alt="Producto de Sky-Importaciones" />
        </Col>
        <Col>
          <div className="text-center">
            <h3>{nombre}</h3>
            <h5>{desc}</h5>
            <h3>$ {precio}</h3>

            {isInCart(id) ? (
              <Link to="/cart" className="btn btn-success my-3">
                Terminar mi compra
              </Link>
            ) : (
              <>
                <ItemCount
                  stock={stock}
                  counter={cantidad}
                  setCounter={setCantidad}
                />

                <button
                  className="btn btn-success my-2"
                  onClick={handleAgregar}
                  disabled={cantidad === 0}
                >
                  Agregar al carrito
                </button>
              </>
            )}

            <br />
            <button
              type="button"
              className="btn btn-outline-dark btn-sm m-1"
              disabled
            >
              {stock} cantidades disponibles
            </button>
            <br />
            <Link to="/">
              <button className="btn btn-success m-1">Volver</button>
            </Link>
            <h6>Medios de Pago:</h6>
            <img
              src={"/assets/ImgDetail/mediosPago.png"}
              alt="distintos medios de pago"
              className="w-75"
            />
          </div>
        </Col>
      </Row>
    </Container>
  ); */
};
