import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

export const ItemDetail = ({
  id,
  nombre,
  precio,
  img,
  desc,
  stock,
  categoria,
}) => {
  return (
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
            <>
              <br />
              <br />
              <Button as={Link} to="/cart" variant="secondary">
                Terminar Compra
              </Button>
              <br />
            </>
            <ItemCount stock={stock} initial={1} />

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
  );
};
