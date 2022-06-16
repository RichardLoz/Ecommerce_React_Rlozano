import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <section>
      <div class="testimonios__header bg-light">
        <span>Nuestros Productos </span>
        <h2>CATALOGO</h2>
      </div>
      <div className="product-grid-container">
        {productos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
};
