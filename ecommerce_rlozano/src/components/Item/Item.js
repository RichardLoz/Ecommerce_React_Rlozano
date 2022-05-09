import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ nombre, precio, img, desc, id }) => {
  return (
    <Card style={{ width: "18rem", margin: "16px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>Precio: ${precio}</Card.Text>
        <Link to={`/detail/${id}`}>
          <Button variant="primary">Ver mas</Button>
        </Link>

        {/* <ItemCount stock={2} initial={0} /> */}
      </Card.Body>
    </Card>
  );
};
