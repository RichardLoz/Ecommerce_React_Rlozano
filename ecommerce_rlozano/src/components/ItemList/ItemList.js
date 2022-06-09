import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

export const ItemList = ({ productos }) => {
  return (
    /*     <Container>
      <h2>Productos</h2>
      <hr />
      <div className="row mt-2">
        {productos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </Container> */
    <section id="product1" className="section-p1">
      <h2>Nuestras categorias</h2>
      <p>Productos de primera calidad</p>
      <div className="pro-container">
        {productos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
};
