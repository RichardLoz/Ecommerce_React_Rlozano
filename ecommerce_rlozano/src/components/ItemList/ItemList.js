import { Container } from "react-bootstrap";
import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <Container>
      <h2>Productos</h2>
      <hr />
      <div className="row mt-2">
        {productos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </Container>
  );
};
