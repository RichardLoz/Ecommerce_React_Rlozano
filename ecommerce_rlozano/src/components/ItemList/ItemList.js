import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <section id="product1" className="section-p1">
      <div class="testimonios__header bg-light">
        <span>Nuestros Productos </span>
        <h2>CATALOGO</h2>
      </div>
      <div className="pro-container">
        {productos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
};
