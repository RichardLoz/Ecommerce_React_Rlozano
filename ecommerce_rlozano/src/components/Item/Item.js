import { Card, Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ nombre, precio, img, desc }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>Precio: ${precio}</Card.Text>
        {/*        <Button variant="primary">Comprar</Button> */}
        <ItemCount stock={2} initial={0} />
      </Card.Body>
    </Card>
  );
};
